const path = require('path');

module.exports = {
    entry: './frontend/supertramp.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: './app/assets/javascripts/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", '.jsx', '*']
    }
};