import type { Metadata } from "next";
import "./globals.css";
import { nanumSquare } from "~/app/fonts";
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "syeon.studio",
  description: "Sooyeon's portfolio website",
};

const GTM_ID = 'GTM-T2GBXKP7';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />
      <body
        className={`${nanumSquare.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
