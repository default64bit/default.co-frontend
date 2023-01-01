module.exports = {
    mode: "jit",
    content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`, `plugins/**/*.{js,ts}`, `app.vue`],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black1: "#1E1E1E",
                black2: "#2b2b2b",

                gray1: "#D3D3D3",
                gray2: "#969696",
                gray3: "#646464",

                green1: "#ADD3B8",
                green2: "#92E3A9",
                // green3: "#3C9A70",
                green3: "#537E65",
                // green3: "#42B883",
                // green3: "#548966",
            },
            boxShadow: {
                nr: "0 5px 10px -5px rgba(0, 0, 0, 0.1)",
            },
            screens: {
                '3xs': "160px",
                '2xs': "275px",
                xs: "320px",
                "1.5xl": "1440px",
                "3xl": "1680px",
                "4xl": "1920px",
            },
            spacing: {
                18: "4.5rem/* 72px */",
                22: "5.5rem/* 88px */",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
