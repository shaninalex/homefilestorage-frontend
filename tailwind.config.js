/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        fontSize: {
            sm: ['12px', '18px'],
            base: ['14px', '22px'],
            lg: ['18px', '26px'],
            xl: ['22px', '30px'],
        }
    },
    plugins: [],
}

