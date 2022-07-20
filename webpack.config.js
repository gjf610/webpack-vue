const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    clean: true
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue', '.json'], // import引用文件省略后缀
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    static: { // 配置静态资源存放位置
      directory: __dirname // 根目录下文件
    },
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          "css-loader"
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      inject: 'body'
    }),
  ]
}
module.exports = config;
