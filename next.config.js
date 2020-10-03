module.exports = {
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
