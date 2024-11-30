// next.config.js
module.exports = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
      },
    
    images: {
      domains: ['portfolio-image-store.s3.ap-south-1.amazonaws.com']  },
    // ...other config settings
  };
  