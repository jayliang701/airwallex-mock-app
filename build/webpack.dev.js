/**
 * For dev
 */
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');

const path = require('path');

const { root, src, dist } = require('./consts');

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",    // for dev
    plugins: [
    ],
    devServer: {
        hot: true,
        contentBase: dist,
        host: "0.0.0.0",
        port: 8080,
        historyApiFallback: true,
    }
});