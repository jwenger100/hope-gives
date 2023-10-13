/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/hope-gives" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/hope-gives" : "",
  },
};

module.exports = nextConfig;
