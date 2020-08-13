/**
 * For production
 */
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// repleace style-loader
baseConfig.module.rules[0].use[0] = MiniCssExtractPlugin.loader;

module.exports = merge(baseConfig, {
    mode: "production",
    devtool:"cheap-module-source-map",   // for prod
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ]
});