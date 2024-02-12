/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                title: ["title", "sans-serif"],
                title2: ["title2", "sans-serif"],
                link: ["link", "sans-serif"],
                content: ["content", "sans-serif"],
            },
        },
    },
    plugins: [],
};
