var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';

var babelQuery = {
  presets: ['es2015', 'stage-0', 'react'],
  plugins: ['transform-async-to-generator', 'transform-decorators-legacy']
}
var plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(process.cwd(), 'example/index.html')
  })
], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

var config = {
  entry: __dirname + '/example/app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: babelQuery
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules', 'example'],
    extensions: ['.js', '.jsx'],
    mainFields: [
      'browser',
      'jsnext:main',
      'module',
      'main'
    ]
  },
  plugins: plugins
};

// if (env === 'development') {
//   new WebpackDevServer(webpack(config), {
//     contentBase: './example',
//     hot: true,
//     debug: true
//   }).listen(port, host, function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log('-------------------------');
//   console.log('Local web server runs at http://' + host + ':' + port);
//   console.log('-------------------------');
// }

module.exports = config;