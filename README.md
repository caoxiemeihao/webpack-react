# webpack-react
webpack4 构建 react 项目

## 参考链接 *19-10-22*
[react+webpack4搭建前端项目](https://www.jianshu.com/p/04e436cf75ba)

#### babel
> 一会 .babelrc 文件能用，一会 babel.config.js 能用，我勒个去 (✪╻✪)‼‼‼‼‼‼ *19-10-22*

```
"plugins": [
  // 转换 es6+ 的新特性
  ['@babel/plugin-transform-runtime', {
    // "corejs": 2： @babel/runtime + @babel/plugin-transform-runtime 在 babel7 下只
    // 包含 helper function(即 Babel 进行处理时需要的帮助函数), 如果想实现 polyfill , 需要使用@babel/runtime-corejs2。
    corejs: 2, // polyfill 需要使用 @babel/runtime-corejs2 [@babel/runtime内部集成了core.js]

    // "useBuildIns":"usage"： 要实现真正的按需引入,即使用什么新特性打包什么新特性,可以使用实验性的 useBuildIns:"usage"。
    useBuildIns: 'usage',
    ["@babel/plugin-proposal-class-properties", { "loose": true }] // 开启 es7 类属性
  }]
]
```
