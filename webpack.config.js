//-S代表发布时需要携带项目依赖-D开发依赖

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')//生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin')//文件的抽离
var OpenBrowserPlugin = require('open-browser-webpack-plugin')//浏览器自动打开

module.exports = {
  entry: './src/script/app.js',

  output: {
    path: __dirname + '/build',
    // filename: 'app_[hash].js'
    filename: 'app.js'
  },

  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 8080,
    historyApiFallback: false,//h5返回时的api
    proxy: {//代理使用一个真实的url
      '/api': {//统一的前缀是个属性还可以定义api2，api3
        target: 'http://localhost:3000',//看到/api就打到这个地址
        pathRewrite: {'^/api': ''}//路径重写，把/api替换成空
      }
    }
  },

  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'//从后往前编译
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      // {
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader!sass-loader'
      // }//非抽离的css
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({//准备抽离
          fallback: 'style-loader',//定义把那谁的结果extract
          use: 'css-loader!sass-loader'//
        })//抽离的css
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,//抛出node_modules
        loader: 'react-hot-loader!babel-loader'//用babel-loader来解析js语法react-hot-loader做react的热替换
      }
    ]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({//优化压缩文件
    //   compress: {
    //     warnings: false//压缩时的错误不显示
    //   },
    //   output: {
    //     comments: false//注释不显示
    //   }
    // }),
    new HtmlWebpackPlugin({//生成html文件在build中
      template: './src/index.ejs',//定义模块
      filename: 'index.html',
      title: '光明都市菜园'
    }),
    new ExtractTextPlugin({//把style抽离成css文件
      // filename: 'app_[hash].css',//可以控制文本号，修改后打包就会生成一个新的js与原来的js的版本号就不相同
      filename: 'app.css',//抽离的文件名
      disable: false,//开关表示我们是不是要打开这个抽离true就关闭了
      allChunks: true//一个一个入口文件
    }),
    new OpenBrowserPlugin({
      url :"http://localhost:8080"
    })
  ],

  externals: {//准备调一个外部的文件就不去node_modules找了减少应用的app.js的量
    'react': 'window.React',//React绑定在windows上了就暴露出去了就不会打包到app.js里了，就在外部引用
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter'
  }
}
