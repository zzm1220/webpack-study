const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  output: {
    filename: "[name].[contentHash].js",
    chunkFilename: "[name].chunk.[contentHash].js"
  }
};

module.exports = webpackMerge(commonConfig, prodConfig);