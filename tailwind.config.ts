
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#212121', // Almost Black Gray
				foreground: '#BDBDBD', // Text on Dark Background
				primary: {
					DEFAULT: '#757575', // Medium Gray
					foreground: '#FAFAFA' // Light Text
				},
				secondary: {
					DEFAULT: '#616161', // Secondary Gray
					foreground: '#E0E0E0' // Light Text on Secondary
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#424242', // Dark Container
					foreground: '#ECEFF1' // Light Text on Dark Container
				},
				accent: {
					DEFAULT: '#303030', // Dark Surface
					foreground: '#E0E0E0' // Light Text on Surface
				},
				popover: {
					DEFAULT: '#303030', // Dark Surface
					foreground: '#E0E0E0' // Light Text on Surface
				},
				card: {
					DEFAULT: '#303030', // Dark Surface
					foreground: '#E0E0E0' // Light Text on Surface
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors from your palette
				appPrimary: '#757575',
				appOnPrimary: '#FAFAFA',
				appPrimaryContainer: '#424242',
				appOnPrimaryContainer: '#ECEFF1',
				appSecondary: '#616161',
				appOnSecondary: '#E0E0E0',
				appSecondaryContainer: 'rgba(21, 21, 23, 0.627)',
				appOnSecondaryContainer: '#CFD8DC',
				appBackground: '#212121',
				appOnBackground: '#BDBDBD',
				appSurface: '#303030',
				appOnSurface: '#E0E0E0',
				appSurfaceHighest: '#3A3A3A'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
