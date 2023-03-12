// webpack基础配置
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/origin.js',
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        include: /src/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'compiled.js', // 指定输出的js文件名
    path: path.resolve(__dirname, './dist'),
    clean: true, // 清除 dist 文件
    publicPath: '/', // 打包后文件的公共前缀路径
  },
};
