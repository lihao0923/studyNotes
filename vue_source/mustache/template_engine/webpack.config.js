const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  // module: {
  //   rules: [
  //     {
  //       // 用来匹配 .css 结尾的文件
  //       test: /\.css$/,
  //       // use 数组里面 Loader 执行顺序是从右到左
  //       use: ["style-loader", "css-loader"],
  //     },
  //   ],
  // },
  plugins: [],
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, 'www'),
    // 不压缩
    compress: false,
    port: 8080,
    // 虚拟打包路径，bundle.js文件没有真正的生成
    publicPath: '/xuni/'
  }
};

