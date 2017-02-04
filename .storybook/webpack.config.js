const path = require('path');

module.exports = {
	resolve: {
		root: [
			path.resolve(__dirname, '..')
		]
	},
	module: {
		loaders: [
			{
				test: /\.css?$/,
				loaders: [ 'style', 'raw' ],
				include: path.resolve(__dirname, '../')
			}
		]
	}
}
