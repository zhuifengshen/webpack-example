const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
  // 解析模块的规则
  resolve: {
    // 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
    alias: {
      $css: resolve(__dirname, 'src/css'),
    },
    // 配置省略文件路径的后缀名(文件名相同时会出错，例如：index.js、index.css)
    extensions: ['.js', '.json', '.jsx', '.css'],
    // 告诉 webpack 解析模块 node_modules 是去找哪个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules'],
  },
}
