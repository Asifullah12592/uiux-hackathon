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
        background: "#ffffff",
        foreground: "var(--foreground)",
        primary500 :"#3563E9",
        Ads1 :"#54a6ff",
        contentBg :"#f6f7f9"
      },
    },
  },
  plugins: [],
};
export default config;
