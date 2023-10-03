import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hope Gives",
  description: "Hope Gives is a non-profit organization that helps people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/H-icon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
