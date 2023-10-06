// global styles shared across the entire site
import "./globals.css";
// Mantine core styles
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { HeaderSimple } from "@/components/HeaderSimple";
import { MantineProvider } from "@mantine/core";

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  // preload: true,
});

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
      <head>
        {/* /favicon.ico does not work - must have images folder???? */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className={quicksand.className}>
        <MantineProvider>
          {/* Adds HeaderSimple to every page */}
          <HeaderSimple />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
