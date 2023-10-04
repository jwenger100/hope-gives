// Import necessary components and types from 'next/document'
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hope Gives",
  description: "Hope Gives is a non-profit organization that helps people.",
};

// Create a custom Document for server-side rendering.
class MyDocument extends Document {
  render() {
    return (
      // The root <Html> component where you can set attributes like 'lang'
      <Html lang="en">
        <Head>
          {/* Add elements to the <head> of the page like meta tags, 
               external fonts, stylesheets, etc. */}
          <link rel="icon" type="image/png" href="/HopeGives-icon.png" />
        </Head>
        <body>
          {/* The Main component is a placeholder for the actual page content */}
          <Main />

          {/* 
             The NextScript component is crucial. It injects necessary 
             scripts for Next.js to handle client-side navigation, 
             lazy-loaded modules, and other essential features.
             Without this, your Next.js app wouldn't function properly on the client side.
          */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
