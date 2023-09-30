/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: [
      "www.gravatar.com",
      "images.unsplash.com",
      "i.dummyjson.com",
      "random.imagecdn.app",
      "picsum.photos",
      "robohash.org",
      "freelogopng.com",
      "img.freepik.com",
      "plus.unsplash.com",
    ],
    disableStaticImages: true,
  },
};
