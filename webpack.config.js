let path = require('path')
let webpack = require('webpack')

let BUILD_DIR = path.resolve(__dirname, 'public')
let APP_DIR = path.resolve(__dirname, 'src')

let config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        include: APP_DIR,
        loader: 'css-loader',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ],
  node: {
    __dirname: true,
  },
}

module.exports = config
