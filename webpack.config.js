const path = require('path'); //添加依赖
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack') //版权声明
const htmlWebpackplugin = require('html-webpack-plugin'); //打包html
module.exports = {
  //入口文件 模块化
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  plugins: [
    new htmlWebpackplugin({ //创建一个在内存中生成的html页面的插件
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归祸灵所有')
  ],
  module: {
    rules: [{
        test: /\.css$/,
        //css-loader只负责加载将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader是，是从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 13000,
            name: 'img/[name].[hash:8].[ext]'
          },
        }]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: {
            loader: 'file-loader',
            options: {
                name:'img/[name].[ext]',
            }
        }
      },    
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    //alias:别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './dist',
    inline: true
  }
}