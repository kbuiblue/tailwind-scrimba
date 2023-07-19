module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                'none': 'none',
              }
        },
        screens: {
            "sm": "430px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px"
        }
    },
    variants: {
        extend: {
            maxWidth: ['responsive'],
        },
    },
    plugins: [],
};
