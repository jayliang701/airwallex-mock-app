/**
 * For production
 */
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');

const path = require('path');

const { root, src, dist } = require('./consts');

module.exports = merge(baseConfig, {
    mode: "production",
    devtool:"cheap-module-source-map",   // for prod
    plugins: [
        //Todo: minify resources
    ]
});