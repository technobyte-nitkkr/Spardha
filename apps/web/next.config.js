module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ['i.pinimg.com'],
    remotePatterns: [
      {
        // used to add images in guest lectures section
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/*/*',
      },
      //used to add images in sponsor section
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'd8it4huxumps7.cloudfront.net',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'thebrandhopper.com',
        port: '',
        pathname: '/**/*',
      }
    ],
  },
};
