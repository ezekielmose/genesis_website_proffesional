import {
  redirect,
} from "next/navigation";

import {
  auth,
} from "@/auth";

import {
  prisma,
} from "@/lib/prisma";

import type {
  Role,
} from "@/generated/prisma/client";


// ======================================================
// REQUIRE LOGGED-IN USER
// ======================================================

export async function requireUser() {

  const session =
    await auth();


  if (
    !session?.user?.id
  ) {

    redirect(
      "/staff-login"
    );

  }


  /*
    IMPORTANT:

    We query the database again instead of
    trusting only the JWT.

    This means if an administrator disables
    an account or changes someone's role,
    protected server pages use the latest
    database value.
  */

  const user =
    await prisma
      .user
      .findUnique({

        where: {

          id:
            session.user.id,

        },

        select: {

          id:
            true,

          fullName:
            true,

          email:
            true,

          role:
            true,

          active:
            true,

          lastLoginAt:
            true,

          createdAt:
            true,

        },

      });


  if (
    !user ||
    !user.active
  ) {

    redirect(
      "/staff-login?error=AccountDisabled"
    );

  }


  return user;

}


// ======================================================
// REQUIRE SPECIFIC ROLE
// ======================================================

export async function requireRole(
  allowedRoles: Role[]
) {

  const user =
    await requireUser();


  if (
    !allowedRoles.includes(
      user.role
    )
  ) {

    redirect(
      "/staff/unauthorized"
    );

  }


  return user;

}