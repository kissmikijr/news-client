module.exports = {
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/headlines/hu",
        permanent: true,
      },
    ];
  },
};
