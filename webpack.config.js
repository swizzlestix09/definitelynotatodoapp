const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { NODE_ENV } = process.env
const inDevelopment = NODE_ENV === "development";

const config = {
  mode: "production",
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: !inDevelopment ? /node_modules\/(?!(@atlaskit\/tooltip))/ : /(node_modules)/,
        options: {
          cacheDirectory: inDevelopment,
          cacheCompression: false,
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = config;
