/**
 * js 语法检测，需要安装：npm i eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import -D
 * 在 package.json 中的 eslintConfig 设置检测规则：
  "eslintConfig": {
    "extends": "airbnb-base"
  }
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // js 语法检查
      {
        test: /\.js$/,
        // 只检测自己写的代码，第三方库是不用检查的
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复 eslint 发现的错误
          fix: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
