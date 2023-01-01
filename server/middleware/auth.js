export default defineEventHandler(async (event) => {
    // make sure this runs only on /login* routes
    const pathStart = event.path.substring(0, 6);
    if (pathStart !== "/login") return;

    // if token exists redirect to admin page
    const token = getCookie(event, "AuthToken");
    if (!!token) return await sendRedirect(event, "/admin");
});
