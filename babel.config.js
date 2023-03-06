module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '45',
          ie: '11',
        },
        useBuiltIns: 'usage',
        corejs: {
          version: '3.29',
          proposals: true,
        },
      },
    ],
  ],
  plugins: [],
};
