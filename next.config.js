/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com", "localhost"],
  },
});
