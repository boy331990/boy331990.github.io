module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	}
	, assetPrefix:
    	process.env.NODE_ENV === "production" ? "https://boy331990.github.io" : ""
};
