const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts", // File đầu vào
  output: {
    filename: "bundle.js", // Tên file đầu ra
    path: path.resolve(__dirname, "dist"), // Đường dẫn link tuyệt đối đến folder "dist"
  },
  devtool: "none", // Thiết lập debugging trong devtool
  module: {
    rules: [
      // Với tất cả các file '.ts' sẽ dùng "ts-loader" để biên dịch sang file '.js
      // Dùng "exclude" để loại trừ file không muốn quét
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  // This plugin tells Webpack to clean the old file in the output folder and write a new one
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
