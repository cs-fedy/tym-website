import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        junior: {
          red: "#820000",
          gray: "#3B3B3B",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
}
export default config
