/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Spotify-green": "#1DB954",
        "Spotify-black": "#101010",
        "Spotify-white": "#fff",
        "Spotify-gray": "#b3b3b3",
        "Spotify-gray-dark": "#808080",
      }
    },
  },
  plugins: [],
}