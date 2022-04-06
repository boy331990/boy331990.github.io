const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	}
};
