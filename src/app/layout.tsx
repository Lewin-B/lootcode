import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { Inter } from "next/font/google";

import Navbar from "~/components/navbar";
import { TRPCReactProvider } from "~/trpc/react";
import { constructMetadata } from "~/lib/utils";
import { type Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = constructMetadata();

export const viewport: Viewport = {
    themeColor: "purple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" className="bg-[#282A36]">
        <body className={`font-sans ${inter.variable}`}>
          <Navbar />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
