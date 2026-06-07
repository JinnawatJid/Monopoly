import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "เกมเศรษฐี - Property Analyzer",
  description: "เว็บแอปพลิเคชันสำหรับวิเคราะห์การลงทุนอสังหาริมทรัพย์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${ibmPlexSansThai.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}