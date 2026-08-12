import type {
  Metadata,
} from "next";

import "./globals.css";

import {
  SiteChrome,
} from "@/components/SiteChrome";


export const metadata: Metadata = {

  title: {

    default:
      "Genesis Digital | Hospitality Creative & AI Reliability",

    template:
      "%s | Genesis Digital",

  },


  description:

    "Genesis Digital helps hospitality brands grow through cinematic video, websites, digital marketing, AI validation and AI reliability testing.",

};


export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >

      <body>

        <SiteChrome>

          {children}

        </SiteChrome>

      </body>

    </html>

  );

}