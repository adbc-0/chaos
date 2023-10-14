/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                "primary-text": "rgb(var(--primary-text) / <alpha-value>)",
            },
            width: {
                128: "32rem",
            },
            keyframes: {
                wave: {
                    "0%": { "background-position": "0% 50%" },
                    "50%": { "background-position": "100% 50%" },
                    "100%": { "background-position": "0% 50%" },
                },
                "fade-in": {
                    "0%": { scale: "0" },
                    "100%": { scale: "1" },
                },
            },
            animation: {
                wave: "wave 4s linear infinite",
                "fade-in": "fade-in 0.2s ease-in-out",
            },
        },
    },
    plugins: [],
};
