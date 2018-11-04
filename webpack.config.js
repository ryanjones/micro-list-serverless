const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./application/index.js']
  },
  output: {
    publicPath: '/',
    filename: 'js/application.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      title: 'micro-list-serverless',
      inject: false,
      template: HtmlWebpackTemplate,
      links: [
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css'
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
