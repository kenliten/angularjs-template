const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.module.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    }
                }
            },
            {
                test: /test\.js/,
                use: 'mocha-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({ 
                cache: true, 
                sourceMap: true,
            }),
            new HtmlMinimizerPlugin(),
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin({ 
            cleanStaleWebpackAssets: false 
        }),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            algorithm: "gzip",
        }),
        new CopyPlugin({
            patterns: [{
                context: path.resolve(__dirname, 'dist'),
                from: '../src/*.html',
            }]
        }),
        new MiniCssExtractPlugin(),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ]
}