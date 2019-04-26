const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: './dist',
        port: 8088,
        open: true,
        hot: true,
        hotOnly: true
    },
    context: path.resolve(__dirname),
    entry: {
        "main": "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // placeholder 占位符
                        mimetype: 'image/jpg',
                        name: '[name]_[hash:3].[ext]',
                        outputPath: 'styles/images/',
                        // publicPath: 'assets/',
                        limit: 10240
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader",
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
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'styles/font/'
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
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist')
    }
}