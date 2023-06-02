/** @type {import('tailwindcss').Config} */
export default {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace'],
			},
			colors: {
				'primary-100': '#9A9A9A',
				light: 'rgba(255, 255, 255, 0.2)',
			},
		},
	},
	plugins: [],
}
