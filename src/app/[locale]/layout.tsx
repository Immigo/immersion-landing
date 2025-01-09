import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";


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
        <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0119/0356.js" async={true} ></script>
        <script id="respondio__growth_tool" async={true} src="https://cdn.respond.io/widget/widget.js?wId=f5c92e16-863d-41f9-9069-9b01c6bd64cd"></script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
