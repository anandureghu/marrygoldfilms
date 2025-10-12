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

export const metadata = {
  title: "Marry Gold Films | International Wedding Photography & Videography",
  description:
    "Marry Gold Films captures the pure joy and timeless beauty of weddings across the world. We weave love, emotion, and elegance into cinematic wedding stories that reflect your true essence. Relive your fairytale moments with authentic storytelling, grace, and artistic precision.",
  keywords: [
    "wedding photography",
    "wedding videography",
    "destination wedding films",
    "luxury wedding cinematography",
    "Marry Gold Films",
    "international wedding photographers",
    "candid wedding photography",
    "wedding stories",
    "bride and groom photography",
    "cinematic wedding films",
    "engagement shoot",
    "pre-wedding shoot",
  ],
  authors: [{ name: "Marry Gold Films Team" }],
  openGraph: {
    title: "Marry Gold Films | Where Love Meets Art",
    description:
      "International wedding photography & videography company crafting timeless, emotion-filled memories. Capture your love story with elegance, grace, and magic.",
    url: "https://marrygoldfilms.vercel.app",
    siteName: "Marry Gold Films",
    images: [
      {
        url: "/marrygoldfilms.jpg",
        width: 1200,
        height: 630,
        alt: "Marry Gold Films – Wedding Photography & Cinematic Stories",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marry Gold Films | Wedding Photography & Cinematic Stories",
    description:
      "Capture your wedding story with Marry Gold Films — timeless, elegant, and emotion-filled photography and videography for your fairytale moments.",
    images: ["/marrygoldfilms.jpg"],
  },
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
