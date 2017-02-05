const path = require('path');

module.exports = {
	resolve: {
		root: [
			path.resolve(__dirname, '..')
		]
	},
	module: {
		loaders: [
			// Extract css files
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				include: path.join(__dirname, '../components')
			},
			// Extract less files
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader',
				include: path.join(__dirname, '../components')
			},
			// Extract json files
			{
				test: /\.json$/,
				loader: 'json-loader',
				include: path.join(__dirname, '../static')
			}
		]
	}
}
