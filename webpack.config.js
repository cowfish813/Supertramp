const path = require('path');

module.exports = {
  entry: "./frontend/supertramp.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./app/assets/javascripts/bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.css$/i,
        include:[ 
          path.resolve(__dirname, './frontend'),
          path.resolve(__dirname, './node_modules'),
        ],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};