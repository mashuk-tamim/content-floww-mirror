/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			yellow: "#f0b428",
			white: "#fff",
			black: "#000000",
			gray: {
				DEFAULT: "#6b7280",
				dark: "#393939",
			},
			offWhite: "#fafafa",
			goldenrod: "#f0b428",
			coral: "#ff7332",
			slate: "#1e293b",
			testimonialBg: "#d4cefb",
			ghia: "#fafafa",
			clientBg: "#f4eae9",
		},
		backgroundImage: {
			"banner-pattern":
				"url('https://assets-global.website-files.com/64fad25f8884cb2d680a1052/651106a1852e9bf68a7cb776_hero-bg-blocks.svg')",
			"radial-gradient":
				"radial-gradient(circle, rgba(24, 0, 255, .07), rgba(24, 0, 255, .07) 38%, #000)",
			// "border-gradient":
		},
		extend: {
			fontFamily: {
				poppins: "Poppins, sans-serif",
				dm: "DM Sans, sans-serif",
				arimo: "Arimo, sans-serif",
			},
		},
	},
	plugins: [require("daisyui")],
};
