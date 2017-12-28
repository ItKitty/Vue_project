// 导入自己下载的 作用是在bundle.js中增加一句注释
var webpack = require('webpack');
// 导入html-webpack-plugin 作用是根据参照文件生成index.html(自动导入bundle.js)
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
          loader: 'vue-loader'
        }
      ]
    }]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by Handsome Wyf'),
    new HtmlWebpackPlugin({
        template:'./template.html',//指定参照文件
        filename:'index.html'//最终生成的文件名称，发布到node服务器
    })
  ]
}