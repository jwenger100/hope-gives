// AppProps is a type that defines the props that are passed to the MyApp component
import type { AppProps } from "next/app";
// Import the MantineProvider from '@mantine/core' for theming and styling with Mantine
import { MantineProvider } from "@mantine/core";

// import the Mantine core styles
import "@mantine/core/styles.css";

// Import global styles for the entire application
import "../globals.css";

// The MyApp component is a custom App component that wraps all pages.
// It receives the actual page as the `Component` prop.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // MantineProvider provides context for Mantine components.
    // By wrapping the entire application with MantineProvider,
    // you make sure all components can access Mantine features.
    <MantineProvider>
      {/* Render the current page */}
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
