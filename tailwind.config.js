module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000000",

          secondary: "#F5F5F5",

          accent: "#B8B2B2",

          neutral: "#B8B2B2",

          "base-100": "#F6F3F6",

          info: "#9CC2DE",

          success: "#1EBE9B",

          warning: "#D3810D",

          error: "#E33B73",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
