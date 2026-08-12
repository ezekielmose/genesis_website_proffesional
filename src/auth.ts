import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { compare } from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { signInSchema } from "@/lib/validation/auth";

import type {
  Role,
} from "@/generated/prisma/client";


export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({

  // ======================================================
  // SESSION
  // ======================================================

  session: {
    strategy: "jwt",

    // 8 hours
    maxAge: 8 * 60 * 60,
  },


  // ======================================================
  // CUSTOM LOGIN PAGE
  // ======================================================

  pages: {
    signIn: "/staff-login",
  },


  // ======================================================
  // AUTHENTICATION PROVIDERS
  // ======================================================

  providers: [

    Credentials({

      name: "Staff credentials",

      credentials: {

        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },

      },


      // ==================================================
      // VERIFY LOGIN
      // ==================================================

      async authorize(credentials) {

        // Validate submitted values
        const parsed =
          signInSchema.safeParse(
            credentials
          );


        if (!parsed.success) {

          console.log(
            "AUTH: Invalid login input",
            parsed.error.flatten()
          );

          return null;
        }


        const email =
          parsed.data.email
            .trim()
            .toLowerCase();


        // ================================================
        // FIND USER
        // ================================================

        const user =
          await prisma.user.findUnique({

            where: {
              email,
            },

          });


        if (!user) {

          console.log(
            "AUTH: User not found:",
            email
          );

          return null;
        }


        // ================================================
        // CHECK ACCOUNT STATUS
        // ================================================

        if (!user.active) {

          console.log(
            "AUTH: Inactive account:",
            email
          );

          return null;
        }


        // ================================================
        // CHECK PASSWORD
        // ================================================

        const validPassword =
          await compare(
            parsed.data.password,
            user.passwordHash
          );


        if (!validPassword) {

          console.log(
            "AUTH: Invalid password:",
            email
          );

          return null;
        }


        console.log(
          "AUTH: Successful login:",
          email,
          user.role
        );


        // ================================================
        // AUTHENTICATED USER
        // ================================================

        return {
          id: user.id,
          name: user.fullName,
          email: user.email,
          role: user.role,
          active: user.active,
        };

      },

    }),

  ],


  // ======================================================
  // CALLBACKS
  // ======================================================

  callbacks: {

    // ====================================================
    // PUT USER DATA INTO JWT
    // ====================================================

    async jwt({
      token,
      user,
    }) {

      if (user) {

        token.userId =
          user.id as string;

        token.role =
          user.role as Role;

        token.active =
          user.active as boolean;

      }


      return token;
    },


    // ====================================================
    // PUT USER DATA INTO SESSION
    // ====================================================

    async session({
      session,
      token,
    }) {

      if (session.user) {

        session.user.id =
          token.userId as string;

        session.user.role =
          token.role as Role;

        session.user.active =
          token.active as boolean;

      }


      return session;
    },


    // ====================================================
    // PROTECT STAFF ROUTES
    // ====================================================

    authorized({
      auth,
      request,
    }) {

      const pathname =
        request.nextUrl.pathname;


      /*
        Protect:

        /staff
        /staff/admin
        /staff/qa
        /staff/evaluator
        /staff/client
        etc.

        Do NOT protect /staff-login here.
      */

      if (
        pathname === "/staff" ||
        pathname.startsWith(
          "/staff/"
        )
      ) {

        return Boolean(
          auth?.user
        );

      }


      return true;
    },

  },


  // ======================================================
  // EVENTS
  // ======================================================

  events: {

    async signIn({
      user,
    }) {

      if (!user.id) {
        return;
      }


      try {

        await prisma.user.update({

          where: {
            id: user.id,
          },

          data: {
            lastLoginAt:
              new Date(),
          },

        });


      } catch (error) {

        /*
          Updating lastLoginAt is useful,
          but failure here should not prevent
          the user from logging in.
        */

        console.error(
          "Unable to update lastLoginAt:",
          error
        );

      }

    },

  },

});