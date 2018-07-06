const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
	entry: slsw.lib.entries,
	mode: 'development',
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};