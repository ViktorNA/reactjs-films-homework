const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const basePath = __dirname;
const targetPath = '../../';
const targetFolder = 'build';

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
        })],
    },
    plugins: [
        new CleanWebpackPlugin([targetFolder], {
            root: basePath + '/' + targetPath,
        }),
        new CompressionPlugin()
    ]
});
