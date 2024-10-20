// このファイルは触らないようにしましょう！

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      sienna: "#a0522d",
      maroon: "#8000000",
      "light-salmon": "#ffa07a",
      saddlebrown: "#8b4713",
    },

    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhvy1upasDEdR_NgRK7XvdNfOBJje0ijZveS8WMG3Ggzhovxpd2Xh9ZUAQSSJmRv-mhbeUBZh0hGh2NsaDXGHMKOs4VeInzrwBCJs07Gi8XfkkfFi36t39P8VN8AEzPiSidm_u8Bs_4qJCRcs0ITlx4yGWnPGXzQRjtEykXJOML7iYwi7FWnFMiDfwou_g/s1920/230913b.png')",
      },
    },
  },
  plugins: [],
};
