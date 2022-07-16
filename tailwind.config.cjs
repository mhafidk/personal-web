const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto Slab']
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
