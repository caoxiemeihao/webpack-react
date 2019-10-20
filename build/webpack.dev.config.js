const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 指定构建环境
  mode: 'development',
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('../dist/index.html'), // html模板生成目录
      template: 'index.html', // html模板
      inject: true, // true[默认值]，script便签插入</body>前
    }),
  ],
  // 开发服务器配置
  devServer: {

  },
}
