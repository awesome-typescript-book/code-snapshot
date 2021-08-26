const { resolve } = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve(__dirname, 'ts/index.ts'),
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  }
}
