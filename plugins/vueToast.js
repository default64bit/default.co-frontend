import Toast from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        shareAppContext: true,
        position: "bottom-right",
        transition: "Vue-Toastification__fade",
    });
});
