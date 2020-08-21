/**
 *
 * @file webpack.common.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */

// Node modules
const path = require('path');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}

module.exports = {
	entry: {
		dist: resolve('src/index.js'),
	},
	devServer: {
		contentBase: resolve('/'),
		compress: true,
		port: 9000,
		inline: true,
		disableHostCheck: true,
	},
	resolve: {
		alias: {
			'@': resolve('src'),
			Stylesheets: resolve('src/stylesheets'),
		},
	},
	plugins: [
		new CleanWebpackPlugin({
			verbose: true,
			// cleanOnceBeforeBuildPatterns: ['example', '!.git']
		}),
		new WebpackNotifierPlugin({
			title: 'Webpack',
			excludeWarnings: true,
			alwaysNotify: true,
		}),
	],
};
