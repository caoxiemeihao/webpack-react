/**
 * webpack 打包配置
 */

process.env.NODE_ENV = 'production'


const path = require('path')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const resolve = str => path.resolve(__dirname, str)

module.exports = webpackMerge(baseWebpackConfig, {
  // 指定构建环境
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('../dist/index.html'), // html模版的生成目录
      template: 'index.html', // html模板
      inject: true, // true[默认值]，script标签插入到</body>前
      hash: true, // scirpt标签src后面会加上hash，[src="xxx.js?hash"]
      // html文件进行压缩
      minify: {
        removeComments: true, // 去掉注释
        collapseWhitespace: true, // 压缩空格
        removeAttributeQuotes: true, // 去掉属性引号 src="xxxx.js" => src=xxxx.js
      },
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  // 构建优化
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        discardComments: { removeAll: true }, // 去掉注释
      }),
    ],
  },
})
