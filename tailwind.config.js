module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
        {
          mytheme: {

 "primary": "#4b5563",

 "secondary": "#d1d5db",

 "accent": "#e5e7eb",

 "neutral": "#4b5563",

 "base-100": "#1f2937",

 "info": "#3ABFF8",

 "success": "#36D399",

 "warning": "#FBBD23",

 "error": "#F87272",
          },
        },
      ],
  },
  plugins: [require("daisyui")],
}
