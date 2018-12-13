module.exports = {
  plugins: [
    // "@babel/plugin-proposal-class-properties",
    // "@babel/plugin-proposal-export-default-from",
    // "@babel/plugin-proposal-object-rest-spread"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],
  ],
};
