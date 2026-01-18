import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fira = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable:"--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chhavi - Portfolio",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fira.variable} ${dancing.variable} antialiased`}
        // className={geistSans.className}
      >
        {children}
      </body>
    </html>
  );
}
