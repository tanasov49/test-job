const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  target: 'web',
  entry: { 
    index: {
      import: './src/pages/index.js',
      
    },
    secondpage: {
      import: './src/html/second/secondpage.js',
    },
    thirdpage: {
      import: './src/html/third/thirdpage.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true
    
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader']
      },
      {
        test: /\.geojson$/,
        type: 'json',
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'secondpage.html',
      template: './src/html/second/secondpage.html',
      chunks: ['secondpage']
    }),
    new HtmlWebpackPlugin({
      filename: 'thirdpage.html',
      template: './src/html/third/thirdpage.html',
      chunks: ['thirdpage']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};