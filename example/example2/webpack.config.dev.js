import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: 'ChingChingTest',
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, 'src/index.js')
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('css/main.css', {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /(\.jsx?$|\.js$)/,
				include: path.join(__dirname, 'src'),
				exclude: /(node_modules)/,
				loaders: ['babel']
			},
			{
				test   : /\.css$/,
				loader: "style-loader!css-loader?sourceMap"
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
				test: /\.(ttf|eot|svg|woff(2)?)(\?\S*)?$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?name=img/[name].[ext]&context=./img',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
		]
	}
};
