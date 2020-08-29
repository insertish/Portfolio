// next.config.js
module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		if (!isServer) {
			config.node = {
				fs: 'empty'
			}
		}
		
		return config;
	}
}
