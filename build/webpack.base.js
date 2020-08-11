/**
 * Define basic webpack configuration here.
 * Please do not setup env specific options.
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const { res, src, dist } = require('./consts');

module.exports = {
    entry: [path.resolve(src, 'index.js')],
    output: {
        path: dist,
        filename: '[name].[hash].js',
    },
    resolve: {
        alias: {
            // '@components': path.resolve(src, 'components'),
            '@styles': path.resolve(src, 'styles'),
            '@static': res,
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    { loader: "css-modules-typescript-loader"},
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[local]-[hash:base64:5]',
                            modules: true,
                            camelCase: true,
                            sourceMap: true,
                            importLoaders: 2,
                        }
                    },
                    // {
                    //     loader: 'typings-for-css-modules-loader',
                    //     options: {
                    //         localIdentName: '[local]-[hash:base64:5]',
                    //         modules: true,
                    //         camelCase: true,
                    //         namedExport: true
                    //     }
                    // },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        // options: {
                        //     prependData: `$cdn: '${process.env.PUBLIC_PATH || '/'}';`
                        // }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|png|jpg|jpeg|gif|bmp|mp4|avi|mp3|wav|ogg|swf)(\?.*)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            publicPath: process.env.PUBLIC_PATH || '/',
                            useRelativePaths: false,
                            name: '[path][name].[hash].[ext]',
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(src, 'index.html'),
            inject: 'body',
        })
    ]
}