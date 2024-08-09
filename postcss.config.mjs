/** @type {import('postcss-load-config').Config} */
// import type { Config } from "tailwindcss";
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend: {
      // Custom Class and Value
    }
   },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
