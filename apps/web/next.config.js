module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        // used to add images in guest lectures section
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/*/*',
      },
    ],
  },
};
