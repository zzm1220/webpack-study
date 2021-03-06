const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: './dist',
        port: 8088,
        open: true,
        hot: true,
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
    }
};

module.exports = webpackMerge(commonConfig, devConfig);