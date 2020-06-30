const path = require("path");
const ExamplePlugin = require("./ExamplePlugin.js");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist",
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ExamplePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.jpe?g$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

// rules: [
//   {
//     test: /\.js$/,
//     use: "babel-loader",
//   },
//   {
//     test: /\.css$/,
//     use: [
//       {
//         loader: "style-loader",
//       },
//       {
//         loader: "css-loader",
//       },
//     ],
//   },
//   {
//     test: /\.jpeg$/,
//     use: [
//       {
//         loader: "url-loader",
//         options: {
//           limit: 10000,
//         },
//       },
//     ],
//   },
// ]
