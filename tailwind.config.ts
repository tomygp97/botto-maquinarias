import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "red-primary": "var(--red-primary)",
        "dark-gray": "var(--dark-gray)",
        "white": "var(--white)",
        "black": "var(--black)",
      },
    },
  },
  plugins: [],
} satisfies Config;
