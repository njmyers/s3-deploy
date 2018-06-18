const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, 'src/program.js'),
  devtool: 'source-map',
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'shebang-loader',
          },
        ],
      },
    ],
  },
  plugins: [],
};
