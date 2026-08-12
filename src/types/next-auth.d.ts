import type {
  DefaultSession,
} from "next-auth";

import type {
  Role,
} from "@/generated/prisma/client";


declare module "next-auth" {

  interface User {

    role:
      Role;

    active:
      boolean;

  }


  interface Session {

    user: {

      id:
        string;

      role:
        Role;

      active:
        boolean;

    } &
      DefaultSession["user"];

  }

}


declare module "next-auth/jwt" {

  interface JWT {

    userId:
      string;

    role:
      Role;

    active:
      boolean;

  }

}