const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",

    //where to put the output, in the build dir
    path: path.resolve(__dirname, "build"),
    //  https://webpack.js.org/configuration/output/#outputpublicpath
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/env"]
          }
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
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
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
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin([
      //_redirects for react-router frontend handling on netlify
      {
        from: path.resolve(__dirname, "_redirects"),
        to: path.resolve(__dirname, "build/")
      },
      //imgs
      {
        from: path.resolve(__dirname, "imgs"),
        to: path.resolve(__dirname, "build/imgs")
      }
    ]),
    new CleanWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: "/",
    port: 8081
  }
};
