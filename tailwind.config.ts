import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "#FBF9F5",
        sand: {
          50: "#FAF7F2",
          100: "#F4EFE6",
          200: "#E9E0D2",
          300: "#DCCFBD",
          400: "#CBB9A2",
          500: "#B89F82",
          600: "#9B8164",
          700: "#7A634B",
          800: "#5A4836",
          900: "#3D3024",
        },
        espresso: {
          50: "#F5F4F3",
          100: "#E6E4E2",
          200: "#C7C4C0",
          300: "#A19C97",
          400: "#746E68",
          500: "#4F4A45",
          600: "#3B3632",
          700: "#2C2825",
          800: "#211E1B",
          900: "#171513",
          950: "#0F0E0C",
        },
        bronze: {
          400: "#C5A880",
          500: "#B89368",
          600: "#A07C52",
          700: "#86633D",
        },
        bordeaux: {
          50: "#FDF2F4",
          100: "#FCE7EA",
          600: "#872B3E",
          700: "#702131",
          800: "#591724",
          900: "#420E19",
        },
        sage: {
          50: "#F4F7F4",
          100: "#E4EDE5",
          500: "#7B947F",
          700: "#4D6651",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(31, 29, 27, 0.04), 0 1px 2px rgba(31, 29, 27, 0.02)",
        soft: "0 4px 16px -2px rgba(31, 29, 27, 0.06), 0 2px 6px -1px rgba(31, 29, 27, 0.03)",
        elevated: "0 12px 32px -6px rgba(31, 29, 27, 0.08), 0 4px 12px -2px rgba(31, 29, 27, 0.04)",
        floating: "0 24px 48px -12px rgba(31, 29, 27, 0.12), 0 8px 24px -4px rgba(31, 29, 27, 0.06)",
      },
      borderRadius: {
        outer: "1.25rem",
        inner: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
