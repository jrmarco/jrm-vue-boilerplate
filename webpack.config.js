const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  devtool: env.prod ? false : "inline-cheap-module-source-map",
  entry: [
    env.prod ? false : require.resolve(`webpack-dev-server/client`),
    path.resolve(__dirname, "./src/main.js")
  ].filter(Boolean),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/"
  },
  resolve: {
    alias: {
      vue: "@vue/runtime-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
