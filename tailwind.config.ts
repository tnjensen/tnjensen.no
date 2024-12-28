import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide": {
          from: {
            transform: 'translateX(-200px)',
            opacity: '0',
          },
          
          to: {
            transform: 'translateX(0)',
            opacity: '1'
          }
        }  
      },
      backgroundImage: {
        'home-img': "url('/images/Elegant_Background-4.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "btn-more": "var(--dark-gray)",
        "btn-more-hover": "var(--light-gray)",
      },
      animation: {
        'slide': 'slide 1.2s ease-in-out'
      },
    },
  },
  plugins: [],
} satisfies Config;
