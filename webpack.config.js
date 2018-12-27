const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackNotifier = require('webpack-notifier');


const production = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
	watch: production ? false : true,
	entry: {
		dist: path.resolve(__dirname, 'src/index.js'),
		example: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		library: 'Architecture',
		libraryTarget: 'umd',
		path: path.resolve(__dirname),
		filename: '[name]/main.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 9000,
		inline: true,
	},
	resolve: {
		alias: {
			Utils: path.resolve(__dirname, 'src/utils'),
			src: path.resolve(__dirname, 'src/'),
			Stylesheets: path.resolve(__dirname, 'src/stylesheets'),
		}
	},
	module: {
		rules: [
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						sourceMap: production ? false : true
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: production ? false : true
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: production ? false : true
					}
				}
			]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(
			['dist', 'example'],
			{
				exclude: ['.git']
			}
		),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'example/index.html' ),
			template: path.resolve(__dirname, 'index.html' ),
			inject: true,
		}),
		new MiniCssExtractPlugin({
			filename: production ? 'build/css/main.[chunkhash:8].css' : 'build/css/main.css',
		}),
		new StyleLintPlugin(),
		new WebpackNotifier()
	],
	devtool: production ? false : 'source-map',
};
