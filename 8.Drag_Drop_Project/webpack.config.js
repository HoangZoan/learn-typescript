const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts", // File đầu vào
  output: {
    filename: "bundle.js", // Tên file đầu ra
    path: path.resolve(__dirname, "dist"), // Đường dẫn link tuyệt đối đến folder "dist"
    publicPath: "dist", // Thiết lập địa chỉ của "bundle.js" để áp dụng trong chế độ "webpack-dev-server"
  },
  devtool: "inline-source-map", // Thiết lập debugging trong devtool
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
};
