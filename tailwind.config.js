/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            oswald: "Oswald, sans-serif",
            urbanist: "Urbanist, sans-serif"
        },
        extend: {
            boxShadow: {
                'custom--1': "0.5px 0px 3px 3px rgba(0, 0, 0, 0.05)"
            }
        },
    },
    plugins: [],
}