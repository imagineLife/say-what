const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'distImgs'
          }
        }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCss({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};