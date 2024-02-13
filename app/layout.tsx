import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my personal portfolio i created with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
