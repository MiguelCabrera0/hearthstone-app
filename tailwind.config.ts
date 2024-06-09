import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image': "url('/assets/background plain@3x.png')",
        'my_bg_image_mobile': "url('/assets/background mobile@3x.png')",
      },
      gradientColorStops: {
        "test": "bg-gradient-to-b from-[#fcd52d] from-0% via-[#ffe792] via-8% via-[#fdd941] via-18% via-[#7a5b35] via-67% via-[#c09c31] via-96% to-[#a38132] to-100%",
      },
      colors: {
        "golden": '#fcd52d',
        "selected-golden": "#fdd941",
        "mana": '#00d1ff',
        "navbar": "rgba(44, 56, 88, 0.75)"
      },
      dropShadow: {
        'class-shadow': '0 0 50px cyan',
      },
    },
  },
  plugins: [],
};
export default config;
