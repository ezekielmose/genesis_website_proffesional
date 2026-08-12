import {
  redirect,
} from "next/navigation";

import {
  requireUser,
} from "@/lib/auth-guards";


export default async function StaffHomePage() {

  const user =
    await requireUser();


  switch (
    user.role
  ) {

    case "ADMIN":

      redirect(
        "/staff/admin"
      );


    case "QA_LEAD":

      redirect(
        "/staff/qa"
      );


    case "EVALUATOR":

      redirect(
        "/staff/evaluator"
      );


    case "CLIENT_ADMIN":

    case "CLIENT_USER":

      redirect(
        "/staff/client"
      );


    default:

      redirect(
        "/staff/unauthorized"
      );

  }

}