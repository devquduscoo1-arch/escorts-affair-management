import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-primary": "#ec3a8e",
        "pink-deep": "#d12c7c",
        "pink-pale": "#f1c8db",
        "pink-text-dusty": "#7a3a5a",
        "pink-border": "#fbcfe8",
        "red-hamburger": "#ee1111",
      },
    },
  },
  plugins: [],
};
export default config;
