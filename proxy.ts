export {
  auth as proxy,
} from "@/auth";


export const config = {

  matcher: [
    "/staff",
    "/staff/:path*",
  ],

};