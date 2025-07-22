import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: "#FFD700",
        "mystic-purple": "#4A0E4E",
        "deep-purple": "#2D1B69",
        "cosmic-blue": "#1E0A3C",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        'float': 'float 20s infinite linear',
        'pulse-golden': 'pulse-golden 2s infinite',
      },
      keyframes: {
        float: {
          '0%': { 
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(-100vh) rotate(360deg)',
            opacity: '0'
          },
        },
        'pulse-golden': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
