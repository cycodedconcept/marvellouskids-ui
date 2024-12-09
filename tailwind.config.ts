import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#007716",
				lemon: "#FFFA00",
				textColor: "#232323",
				darkBlue: "#0D093B",
			},
			backgroundImage: {
				welcome: "url('/assets/welcome.png')",
				"welcome-cloud-design": "url('/assets/marvellous-cloud-design.png')",
				"welcome-cloud": "url('/assets/home-cloud.png')",
				"welcome-cloud-mobilie": "url('/assets/home-cloud-mobile.png')",

				"dreams-begin": "url('/assets/where-little-dreams-begin.png')",
				"dreams-begin2": "url('/assets/where-little-dreams-begin2.png')",
				"dreams-begin3": "url('/assets/where-little-dreams-begin3.png')",
			},
		},
	},
	plugins: [],
} satisfies Config;
