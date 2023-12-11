import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./containers/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#3C50E0",
				primary_normal: "#00005C",
				background: "#F4F7FC",
				c_gray: "#627193",
			},
			boxShadow: {
				button: "0px 20px 30px -16px rgba(60, 80, 224, 0.25)",
				header: "0px 15px 30px 0px rgba(0, 0, 0, 0.04)",
			},
		},
	},
	plugins: [],
};
export default config;

