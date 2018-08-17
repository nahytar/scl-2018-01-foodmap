const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'main')],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public', 'assets', 'js')
  },
  resolve: {
    extensions: ['.json', '.js', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('public', 'assets', 'js')
  },
  watch: true,
}