/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#ffffff",
            secondary: "#000000",
            accent: "#caef45",
            info: "rgba(255, 255, 255, 0.7)",
            warn: "#212121",
         },
      },
   },
   plugins: [],
};
