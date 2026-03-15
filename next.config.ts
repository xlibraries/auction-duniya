import type { NextConfig } from "next";
import WebpackObfuscator from "webpack-obfuscator";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV === "production") {
      config.plugins.push(
        new WebpackObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            disableConsoleOutput: true,
            identifierNamesGenerator: "hexadecimal",
            renameGlobals: false,
            selfDefending: true,
            splitStrings: true,
            splitStringsChunkLength: 5,
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
