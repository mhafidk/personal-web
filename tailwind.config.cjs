const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto Slab']
			},
			colors: {
				white: '#FFFFFF'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
						color: '#171717',
						h1: {
							color: '#171717',
							fontWeight: 700
						},
						h2: {
							color: '#171717',
							fontWeight: 600
						},
						h3: {
							color: '#171717',
							fontWeight: 500
						},
						h4: {
							color: '#171717',
							fontWeight: 400
						},
						h5: {
							color: '#171717',
							fontWeight: 300
						},
						h6: {
							color: '#171717',
							fontWeight: 200
						},
						a: {
							color: '#65A30D',
							textDecoration: 'none'
						}
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
};

module.exports = config;
