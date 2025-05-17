const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            custom: "#222222", // Tu dodajesz własny kolor
          },
          fontFamily: {
            orbitron: ["Orbitron", "sans-serif"],
          },
        },
      },
    },
  },
};
export default config;
