/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "nextjs-demo-users-image.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
