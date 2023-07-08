/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        fontFamily: {
          barlow: ["Barlow Semi Condensed"]
        },
        colors: {
            moderate_violet: "hsl(263, 55%, 52%)",
            very_dark_grayish_blue: "hsl(217, 19%, 35%)",
            very_dark_blackish_blue: "hsl(219, 29%, 14%)",
            white_guide: "hsl(0, 0%, 100%)",
            light_grayish_blue: "hsl(210, 46%, 95%)",
            light_gray: "hsl(0, 0%, 81%)",
        },
        content: {
            quotation: "url('images/bg-pattern-quotation.svg')"
        }
    },

  plugins: [],
  }
}

