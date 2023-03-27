module.exports = {
  webpack: {
    configure: {
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles:
              process.env.NODE_ENV === "production"
                ? {
                    name: "common",
                    type: "css/mini-extract",
                    minChunks: 2,
                    enforce: true,
                  }
                : false,
          },
        },
      },
    },
  },
};
