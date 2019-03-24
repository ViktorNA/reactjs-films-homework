const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "../../build"),
        filename: "js/[name]-[hash].js"
    },
    resolve: {
        extensions: [' ', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[hash].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.scss$/,
                use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: true,
                        localIdentName: "[local]___[hash:base64:5]"
                    }
                },
                {
                    loader: "sass-loader"
                }
                ]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader?sourceMap'
                },
                {
                    loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 244 * 1024,
                    name: 'assets/images/[name]-[hash].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name]-[hash].[ext]',
                },
            }
        ]
    }
};
