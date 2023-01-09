/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',


        },
        extend: {
            colors: {
                primary: '#0f766e',
                secondary: '#64748b',
                drak: '#0f172a'

            },
            screens: {
                '2xl': '1320px',

            },
        },
    },
    plugins: [],
}