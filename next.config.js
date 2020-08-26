// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
	cssModules: true,
	webpack(config, { isServer }) {
		if (!isServer) {
			config.node = {
				fs: 'empty'
			}
		}
		
		return config
	}
})