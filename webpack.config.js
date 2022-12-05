const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_DIR = path.join(__dirname, "src");
const BUILD_DIR = path.join(__dirname, "build");

const entry = path.join(SRC_DIR, "index.ts");
const template = path.join(SRC_DIR, "index.dev.html");

module.exports = {
  entry: entry,
  output: {
    filename: "index.js",
    path: BUILD_DIR,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { version: "legacy" }],
              ],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules", SRC_DIR],
  },
  devServer: {
    open: ["/testing-page"],
    historyApiFallback: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template,
    }),
  ],
};
