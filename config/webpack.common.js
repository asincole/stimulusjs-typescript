const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/src/index.ts",
  output: {
    filename: "[name].[hash:8].js",
    sourceMapFilename: "[name].[hash:8].map",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[id].[hash:8].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App Name",
      template: "src/index.hbs",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      { test: /(\.handlebars$)|(\.hbs$)/, loader: "handlebars-loader" },
    ],
  },
};
