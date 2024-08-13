/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","dracula","emerald","synthwave","halloween",
      "cyberpunk","dim","autumn","goth","lofi","pastel","retro","steam","lemonade","weyland"],
  },
}

