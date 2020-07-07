/**
 * js 在生成环境下会自动化压缩代码
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// process.env.NODE_ENV = 'production'
process.env.NODE_ENV = 'development'

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$S/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示 babel 做怎么样的兼容性处理
          presets: [
            [
              '@bebel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 制定 core-js 版本
                corejs: {
                  version: 3,
                },
                // 指定兼容范围，或者默认使用 browserslist 配置即可
                // targets: {
                //   chrome: '60',
                //   firefox: '60',
                //   ie: '8',
                //   safari: '10',
                //   edge: '17',
                // },
              },
            ],
          ],
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
