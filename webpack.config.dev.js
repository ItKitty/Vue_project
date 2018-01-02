// 导入
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 打包入口文件
  entry: "./src/main.js",
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|png|svg|gif)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    // 设置拓展民
    extensions: ['.vue', '.json', '*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 指定参照文件
      template: './template.html',
      // 最终生成的文件 发布到node服务器
      filename: "index.html"
    })
  ]
}