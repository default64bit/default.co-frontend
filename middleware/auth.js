export default defineNuxtRouteMiddleware((to, from) => {
    if (!process.server) return;
    
    // if token exists redirect to admin page
    const token = useCookie("AuthToken");
    if (!!token.value) return navigateTo("/admin");
});
