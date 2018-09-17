const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

const config = {
    mode: "development",
    entry: './src/index',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({
            filename: "index.html",
            template: 'index.html',
            inject: true,
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
}

module.exports = config;