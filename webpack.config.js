const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "My App", template: "./index.html" }),
  ],
}
