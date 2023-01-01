import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Default.CO",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "format-detection", content: "telephone=no" },
                { name: "description", content: "A Solution To Digitize Ideas" },
                { name: "theme-color", content: "#262626" },
            ],
            link: [
                // { rel: "manifest", href: "/pwa/site.webmanifest" },
                // { rel: "icon", href: "/pwa/favicon.ico" },
                // { rel: "apple-touch-icon", href: "/pwa/apple-touch-icon.png" },
                // { rel: "mask-icon", href: "/pwa/safari-pinned-tab.svg", color: "#FFFFFF" },
            ],
        },
    },

    css: ["vue-toastification/dist/index.css", "~/assets/css/styles.css"],
    postcss: {
        plugins: {
            // tailwind: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: [
            "vue-toastification",
            // "@ckeditor/ckeditor5-vue"
        ],
    },

    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
            GOOGLE_LOGIN_CLIENT_ID: process.env.GOOGLE_LOGIN_CLIENT_ID,
        },
    },

    // vite options
    vite: {},

    nitro: {
        compressPublicAssets: true,
    },

    render: {
        http2: { push: true },
    },

    modules: [
        "@nuxt/image-edge",

        // tailwind moudle for nuxt 3
        "@nuxtjs/tailwindcss",

        // pinia moudle
        // "@pinia/nuxt",
    ],
});
