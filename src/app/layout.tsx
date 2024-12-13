import type { Metadata } from "next";
import "./globals.css";
import { nanumSquare } from "~/app/fonts";
import Head from "next/head";
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
      <Head>
        <GoogleTagManager gtmId={GTM_ID} />
      </Head>
      <body
        className={`${nanumSquare.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
