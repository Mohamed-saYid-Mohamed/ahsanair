/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003366", // Airline Deep Blue
          light: "#004080",   // Lighter Navy
          dark: "#002244",    // Midnight Blue
        },
        secondary: {
          DEFAULT: "#e0f2fe", // Sky 100/200ish
          light: "#f0f9ff",   // Sky 50
          foreground: "#0f172a", // Slate 900
        },
        accent: {
          DEFAULT: "#d4af37", // Gold
          hover: "#b4941f",   // Darker Gold
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }
    },
  },
  plugins: [],
}
