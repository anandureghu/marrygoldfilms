import type { Metadata } from "next";
import {
  Fredoka,
  Fustat,
  Handlee,
  Lustria,
  Miss_Fajardose,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const missFajardose = Miss_Fajardose({
  variable: "--font-sign",
  subsets: ["latin"],
  weight: "400",
});

// highlight font
const highlight = Lustria({
  variable: "--font-highlight",
  weight: ["400"],
  subsets: ["latin"],
});

// body font
const body = Fredoka({
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// secondary font
const secondary = Fustat({
  variable: "--font-secondary",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anandureghu",
  description:
    "A wizard who loves design and code. I tell stories through my designs and illustrations - Anandu Reghu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${body.variable} ${highlight.variable} ${secondary.variable} ${missFajardose.variable} antialiased font-body mx-auto bg-primary-200 text-primary-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
