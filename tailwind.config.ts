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
        main: {
          navy: "#45769C",
          light_navy :"#BED3E2",
          gray: "#656565",
          gray100: '#A4A4A4'
        },
        eescape: {
          primary: "#8094FF",
          secondary: "#CDD5FF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
