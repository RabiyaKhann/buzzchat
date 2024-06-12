/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint : {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ hostname: "limitless-porpoise-331.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;
