import type { Metadata } from "next";
import "./globals.css";
import { nanumSquare } from "~/app/fonts";


export const metadata: Metadata = {
  title: "syeon.studio",
  description: "Sooyeon's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nanumSquare.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
