var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    entry: {
      main: path.join(__dirname, "src/index.tsx")
    },
    output: {
        filename: 'jujureact.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{loader: 'babel-loader'}]
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [{loader: 'ts-loader'}]
        },
        {
          test: /\.(html)$/,
          use: [{loader: 'html-loader'}]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
};
