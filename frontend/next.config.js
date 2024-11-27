// const { i18n } = require("./next-i18next.config");
// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   i18n,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
