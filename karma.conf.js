var webpackConfig = require('./webpack.config.js'); //--> passing the configuration of webpack
module.exports = function (config) {
	config.set({  // --> sets our configuration for the test
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['app/tests/**/*.test.jsx'], //-> any test in this folder that ends in test.jsx
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] //-> we also want to run these modules when running our tests
		},
		reporters: ['mocha'], //--> shows nices checkboxes
		client: {
			mocha: {  //--> sends mocha some configs so that we don't wait unnecessarily a long time when a test
					 // takes longer than it's supposed to.
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		},
	});
}