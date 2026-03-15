import type { NextConfig } from "next";
import WebpackObfuscator from "webpack-obfuscator";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable source maps in production so source code isn't visible in browser devtools
  productionBrowserSourceMaps: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV === "production") {
      // Remove any source map generation
      config.devtool = false;

      config.plugins.push(
        new WebpackObfuscator(
          {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 2000,
            disableConsoleOutput: true,
            identifierNamesGenerator: "hexadecimal",
            renameGlobals: false,
            rotateStringArray: true,
            selfDefending: true,
            splitStrings: true,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayEncoding: ["base64"],
            stringArrayThreshold: 1,
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
          },
          // Exclude Next.js internals from obfuscation
          ["vendors-*.js", "framework-*.js", "webpack-*.js"]
        )
      );
    }
    return config;
  },
};

export default nextConfig;
