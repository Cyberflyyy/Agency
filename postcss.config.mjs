const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            custom: "#222222", // Tu dodajesz własny kolor
          },
        },
      },
    },
  },
};
export default config;
