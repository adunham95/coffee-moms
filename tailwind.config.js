/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
	theme: {
		extend: {
			minHeight: {
				screen: 'calc(100vh - 64px - 120px)',
				'screen-mobile': 'calc(100vh - 64px - 172px)',
			},
			fontFamily: {
				body: ['Lato', 'sans-serif'],
				heading: ['Lustria', 'serif'],
			},
			colors: {
				brand: {
					50: '#f8f0fa',
					100: '#efe1f2',
					200: '#d8b8e0',
					300: '#be91cc',
					400: '#9052a8',
					500: '#632382',
					600: '#551c75',
					700: '#411361',
					800: '#300d4f',
					900: '#20073b',
					950: '#120326',
				},
				'brand-accent': {
					50: '#f0faf8',
					100: '#e1f2ef',
					200: '#b8e0d8',
					300: '#91ccbe',
					400: '#52a890',
					500: '#238263',
					600: '#1c7555',
					700: '#136141',
					800: '#0d4f30',
					900: '#073b20',
					950: '#032612',
				},
				'brand-bg': {
					50: '#fffefc',
					100: '#fffefc',
					200: '#fcfaf2',
					300: '#fcf8ed',
					400: '#faf1e1',
					500: '#f7e8d3',
					600: '#dec7ab',
					700: '#ba9a77',
					800: '#946d4b',
					900: '#70482b',
					950: '#472612',
					1000: '#140601',
				},
				theme: {
					surface: '#fffefc',
					background: '#fcfaf2',
					border: '#70482b',
					content: '#111827',
					'secondary-content': '#6b7280',
					'content-hover': '#4c4c4c',
					primary: {
						DEFAULT: '#9052a8',
						hover: '#551c75',
						content: '#f9fafb',
					},
					accent: {
						DEFAULT: '#52a890',
						hover: '#1c7555',
						content: '#f9fafb',
					},
					danger: {
						DEFAULT: '#dc2626',
						hover: '#b91c1c',
						content: '#f9fafb',
					},

					brand: {
						DEFAULT: '#9052a8',
						content: '#20073b',
						'secondary-content': '#411361',
						icon: '#9052a8',
						bg: '#d8b8e0',
					},

					info: {
						DEFAULT: '#3b82f6',
						content: '#1d4ed8',
						'secondary-content': '#2563eb',
						icon: '#60a5fa',
						bg: '#cceafc',
					},

					success: {
						DEFAULT: '#22c55e',
						content: '#166534',
						'secondary-content': '#15803d',
						icon: '#4ade80',
						bg: '#bdf0dc',
					},

					error: {
						DEFAULT: '#ef4444',
						content: '#991b1b',
						'secondary-content': '#b91c1c',
						icon: '#f87171',
						bg: '#fcd6c5',
					},

					warn: {
						DEFAULT: '#eab308',
						content: '#854d0e',
						'secondary-content': '#a16207',
						icon: '#facc15',
						bg: '#fff8c4',
					},
				},
			},
		},
	},
};
