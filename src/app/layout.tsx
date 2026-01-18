import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import localFont from "next/font/local";
import { Navigation } from "@/components/Navigation";
import { TextProvider } from "@/context/TextContext";
// import Dock from "@/components/Dock";

const myFont = localFont({
  src: "../fonts/CodecPro-Regular.ttf",
  variable: "--font-my-font",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ademola",
  description: "A frontend developer based in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable} antialiased relative bg-black text-white`}>
        <TextProvider>
        <Navigation />
        {children}
        {/* <Dock /> */}
        </TextProvider>
      </body>
    </html>
  );
}
