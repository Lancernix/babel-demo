module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '30',
        },
      },
    ],
  ],
  plugins: [
    // [
    //   '@babel/plugin-transform-runtime',
    //   {
    //     corejs: { version: 3, proposals: true },
    //   },
    // ],
  ],
};
