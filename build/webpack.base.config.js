const utils = require('./utils')

module.exports = {
  // 入口
  entry: {
    app: utils.resolve('../src'),
  },
  // 出口
  output: {
    path: utils.resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/', // 打包后的资源访问路径前缀
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配react文件
        // exclude: /node_modules/, // 不处理node_modules中的模块
        include: utils.resolve('..', 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // 创建 <style></style
          },
          {
            loader: 'css-loader', // 转换css文件
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader', // 编译 less
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // url-loader 包含 file-loader，这里不用 file-loader，小于 10000KB 的图片编译成 base64，大于 10000KB 文件标签引入
          name: 'static/images/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  // 引入文件配置
  resolve: {
    extensions: ['.js', '.json'], // 解析扩展。[引入文件时不用加扩展名]
    alias: {
      '@': utils.resolve('..', 'src'),
      'assets': utils.resolve('..', 'src/assets'),
      '_c': utils.resolve('..', 'src/compoments'),
      '_p': utils.resolve('..', 'src/pages'),
    },
  },
}
