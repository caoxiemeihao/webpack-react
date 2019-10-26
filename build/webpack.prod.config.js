const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = webpackMerge(baseWebpackConfig, {
  // 指定构建环境
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('../dist/index.html'), // html模版的生成目录
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
})
