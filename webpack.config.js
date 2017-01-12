var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    "entry": "./index.js",
    "output": {
        "filename": "./dist/scripts/app.js"
    },
    "module": {
        "loaders": [{
                "test": /\.html$/,
                "loader": "raw"
            },
            {
                "test": /\.scss|.css$/,
                "loader": 'style!css?sourceMap!sass?sourceMap'
            },
            {
                test: /\.woff/,
                loader: require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
            },
            {
                test: /\.ttf/,
                loader: require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test: /\.eot/,
                loader: require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test: /\.svg/,
                loader: require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
        ]
    }
}