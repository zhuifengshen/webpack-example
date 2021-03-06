const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PostcssPresetEnv = require('postcss-preset-env')

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production'

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [PostcssPresetEnv()],
    },
  },
]

module.exports = {
  // 生成环境下 js 代码自动化压缩
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 处理 css 文件
      {
        test: /\.css$/,
        use: [...commonCssLoader],
      },
      // 处理 less 文件
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader'],
      },
      // js 语法检查
      {
        // 在package.json中配置检查规则 eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 正常来讲，一个文件只能被一个loader处理。当一个文件要被多个loader处理，一定要指定loader执行的顺序：先执行eslint，再执行babel
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      // js 兼容性处理
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: { version: 3 },
                targets: {
                  chrome: '60',
                  firefox: '50',
                },
              },
            ],
          ],
        },
      },
      // 处理 css 中的图片资源
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false,
        },
      },
      // 处理 html 中的图片资源
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // 处理其他资源（比如字体等）
      {
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    // 提取 css 成单独文件
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    // css 压缩
    new OptimizeCssAssetsWebpackPlugin(),
    // html 模板和压缩
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
}
