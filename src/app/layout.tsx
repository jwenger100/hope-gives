// global styles shared across the entire site
import "./globals.css";
// Mantine core styles
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Header } from "@/components/Header";
import { MantineProvider, createTheme } from "@mantine/core";

// export const theme = createTheme({
/** Put your mantine theme overrides here */
/** See full list of overridable components here: https://mantine.dev/theming/overrides */
// headings: {
//   fontFamily: "Quicksand, sans-serif",
// },
// });

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
        <link rel="icon" type="image/png" href="/HopeGives-Icon1.png" />
      </head>
      <body className={quicksand.className}>
        <MantineProvider>
          {/* Adds Header to every page */}
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
