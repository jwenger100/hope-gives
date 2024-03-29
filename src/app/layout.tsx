// global styles shared across the entire site
import "./globals.css";
// Mantine core styles
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Header } from "@/components/Header";
import { FooterSocial } from "@/components/FooterSocial";
import ThemeProvider from "./theme-provider";
import Script from "next/script";

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
        <link
          rel="icon"
          type="image/png"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/HopeGives-Icon1.png`}
        />
        {/* Google tag (gtag.js) using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9KE4SE1GQW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9KE4SE1GQW');
          `}
        </Script>
      </head>
      <body className={quicksand.className}>
        <ThemeProvider>
          {/* Adds Header to every page */}
          <Header />
          {children}
          <FooterSocial />
        </ThemeProvider>
      </body>
    </html>
  );
}
