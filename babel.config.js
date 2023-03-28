module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '40',
        },
        useBuiltIns: 'usage',
        corejs: { version: '3.29', proposals: true },
      },
    ],
    // [
    //   '@babel/preset-react',
    //   {
    //     // react17之后可以直接使用jsx无需显式引入React，需要设置此配置支持
    //     // 默认为 classic，babel8中默认选项将改为 automatic
    //     runtime: 'automatic',
    //   },
    // ],
  ],
  // plugins: [['@babel/plugin-transform-runtime']],
};
