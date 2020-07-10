const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 取代 style-loader，提取 js 中的 css 成单独文件
          'css-loader', // 将 css 文件整合到 js 文件中
        ],
      },
    ],
  },
  plugins: [
    // html-webpack-plugin 默认会创建一个空的HTML（也可以指定模板），并自动引入打包输出的所有资源（JS、CSS）
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css', // 对输出的 css 文件进行重命名
    }),
  ],
  mode: 'development',
}
