const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
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
  optimization: {
    minimize: true,
  },
  devServer: {
    port: 4389, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新
    // open: true, // 自动打开浏览器窗口
    historyApiFallback: true, // 解决history路由404问题
    // proxy: devProxy,
    client: {
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'), // 定义root节点的模板
      filename: 'index.html', // 指定输出的html文件名
      inject: true, // 自动注入静态资源
    }),
  ],
};
