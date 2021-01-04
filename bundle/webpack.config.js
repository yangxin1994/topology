const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: '../dist/bundle/index.js',
    library: 'MA',
    libraryTarget: 'umd',
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        /* options: see below */
      }),
    ],
  },
  // devtool: "inline-source-map"
};
