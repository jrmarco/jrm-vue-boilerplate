const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  devtool: env.prod ? false : "inline-cheap-module-source-map",
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  devServer: {
    port: 80
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
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
