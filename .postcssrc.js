module.exports = {
	// parser: 'sugarss',
	plugins: {
		// 'postcss-import': {},
		// 'postcss-cssnext': {},
		'autoprefixer': {},
		'cssnano': process.env.NODE_ENV === 'production' ? true : false
	}
}
