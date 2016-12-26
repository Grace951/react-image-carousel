var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'react-image-carousel';

var plugins = [
		new ExtractTextPlugin('css/main.css', {
			allChunks: true
		})
	];
var outputFile;

if (env === 'build') {
	const GLOBALS = {
		'process.env.NODE_ENV': JSON.stringify('production')
	};
	plugins.push(new webpack.DefinePlugin(GLOBALS));

  plugins.push(new UglifyJsPlugin({ minimize: true }));  
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
		{
			test   : /\.css$/,
			loaders: "css?sourceMap!resolve-url"
		},
		{
			test: /(\.sass$|\.scss$)/,
			loader: ExtractTextPlugin.extract(
				'style', // The backup style loader
				'css?sourceMap!resolve-url!sass?sourceMap&includePaths[]=./sass',
				{ publicPath: '../'}
			)
		},	  
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
