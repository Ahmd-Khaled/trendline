import createNextIntlPlugin from "next-intl/plugin";
// const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
// const path = require('path')
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  // output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './base.scss';`,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/sick-leave-history/:serviceId",
  //       destination: "/sick-leave-history/:serviceId",
  //       locale: false
  //     },
  //  ]}
};

export default withNextIntl(nextConfig);
// export default nextConfig;
