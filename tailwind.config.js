/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Nunito Sans"],
            serif: ["Nunito Sans"],
            // sans: [
            //     'JetBrains Mono',
            //     'ui-monospace',
            //     'SFMono-Regular',
            //     'Menlo',
            //     'Monaco',
            //     'Consolas',
            //     'monospace',
            // ],
            syne: ['Syne', 'sans-serif'],
            // sans: ['"Poppins"', 'sans-serif'],
            // serif: ['"Poppins"', 'serif'],

            display: ['Sora', 'sans-serif'],
        },
        screens: {
            sm: '480px', // small devices (mobile)
            md: '768px', // medium devices (tablet)
            lg: '1024px', // large devices (small laptop)
            xl: '1280px', // extra large (desktop)
            '2xl': '1536px' // 2x extra large (wide desktop)
        }
    },
    plugins: [require('daisyui')]
};
