import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priima Kuljetukset",
  description:
    "Effortless and affordable transportation services | Priima Kuljetukset",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
