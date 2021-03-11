const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    theme: path.resolve(__dirname, "js/theme.js"),
    fontawesome: path.resolve(__dirname, "sass/fontawesome.scss"),
    webfonts: path.resolve(__dirname, "sass/webfonts.scss"),
  },
  output: {
    path: path.resolve(__dirname, "sphinx_wagtail_theme/static/dist"),
    publicPath: "",
    filename: "[name].js",
  },
  externals: {
    jquery: "window.$",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s?)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]",
          },
        },
      },
    ],
  },
  // Disable performance hints – currently there are much more valuable
  // optimizations for us to do outside of Webpack
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      // Copy files without processing by webpack.
      patterns: [
        {
          from: path.resolve(__dirname, "node_modules/jquery/dist/jquery.min.js"),
          to: path.resolve(
            __dirname,
            "sphinx_wagtail_theme/static/dist/jquery.min.js"
          ),
        },
        {
          from: path.resolve(
            __dirname,
            "node_modules/underscore/underscore-min.js"
          ),
          to: path.resolve(
            __dirname,
            "sphinx_wagtail_theme/static/dist/underscore.min.js"
          ),
        },
        {
          from: path.resolve(__dirname, "js/doctools.js"),
          to: path.resolve(
            __dirname,
            "sphinx_wagtail_theme/static/dist/doctools.js"
          ),
        },
        {
          from: path.resolve(__dirname, "js/searchtools.js"),
          to: path.resolve(
            __dirname,
            "sphinx_wagtail_theme/static/dist/searchtools.js"
          ),
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
