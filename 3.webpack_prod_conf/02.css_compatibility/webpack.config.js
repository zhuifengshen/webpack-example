/**
 "browserslist": {
    // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    // 生产环境：默认是看生产环境
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PostcssPresetEnv = require('postcss-preset-env')

// 设置nodejs环境变量
// process.env.NODE_ENV = 'development'
process.env.NODE_ENV = 'production'

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
          // css 兼容性处理：postcss，需要下载 postcss-loader 和 postcss-preset-env，并在 package.json 中配置兼容范围 browserslist
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [PostcssPresetEnv()], // postcss的插件
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // html-webpack-plugin 默认会创建一个空的HTML（也可以指定模板），并自动引入打包输出的所有资源（JS、CSS）
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // 提取 css 成单独文件
    new MiniCssExtractPlugin({
      filename: 'css/built.css', // 对输出的 css 文件进行重命名
    }),
  ],
  mode: 'development',
}
