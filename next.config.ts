import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Home has package.json / package-lock.json, which makes Turbopack
  // treat /Users/suniya as the workspace root and hang on startup.
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
