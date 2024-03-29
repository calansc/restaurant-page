const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    // initial: "./src/initial.js",
    // home: "./src/home.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[id].[chunkhash].js",
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
