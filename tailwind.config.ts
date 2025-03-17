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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#fb8b24",
        },
        secondary: {
          DEFAULT: "#DB680C",
        },
        dark: {
          DEFAULT: "#01060E",
          100: "#BFC1C3",
          500: "#41444A",
          600: "#384550",
          700: "#faf0e6",
        },
      },
      backgroundImage: {
        "home-showcase": "url('/assets/showcase.png')",
        "our-services": "url('/assets/our-services.svg')",
        testimonial: "url('/assets/testimonial.svg')",
        footer: "url('/assets/footer-new.png')",
        banner: "url('/assets/banner-new.png')",
        empowerment: "url('/assets/empowerment.svg')",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        goldman: ["Goldman", "sans-serif"],
        playfairDisplay: ["Playfair Display", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "bounce-less": "bounce-less 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "bounce-less": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
