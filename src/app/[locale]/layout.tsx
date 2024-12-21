import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2 = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight : '400'
})

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Immigo - Learning English by Living",
  description: "Start your journey in the US virtually today.",
};

export default function RootLayout({
  children,
}: Readonly<
  RootLayoutProps
>) {
  return (
    <html lang="en">
      <head>                
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
