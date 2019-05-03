const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // placeholder 占位符
            mimetype: "image/jpg",
            name: "[name]_[hash:3].[ext]",
            outputPath: "styles/images/",
            // publicPath: 'assets/',
            limit: 10240
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            //   reloadAll: true,
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "styles/font/"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  optimization: {
    runtimeChunk: {
        name: "runtime"
    },
    usedExports: true,
    splitChunks: {
      chunks: "all"
    //   cacheGroups: {
    //     styles: {
    //       name: "styles",
    //       test: /\.(css|scss)$/,
    //       chunks: "all",
    //       enforce: true
    //     }
    //   }
    }
  },
  output: {
    path: path.resolve(__dirname, "./dist")
  }
};
