import axios from "axios";

export default defineEventHandler(async (event) => {
    // make sure this runs only on /admin* routes
    const pathStart = event.path.substring(0, 6);
    if (pathStart !== "/admin") return;

    const { req, res } = event.node;
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;

    // if token dosent exist redirect to login page
    const token = getCookie(event, "AuthToken");
    if (!token) return await sendRedirect(event, "/login");

    delete req.headers["content-length"];
    delete req.headers["host"];

    // if token exist check if its valid or not
    const isTokenValid = await axios
        .get(`${process.env.API_BASE_URL}/admin/check`, {
            timeout: 15 * 1000,
            headers: { ...req.headers, "x-forwarded-for": ip, serversecret: process.env.SERVER_SECRET, tt: Date.now() },
        })
        .then((response) => true)
        .catch((e) => false);

    // if token is not valid delete the token and redirect to login page
    if (!isTokenValid) {
        setCookie(event, "AuthToken", "", { sameSite: "strict", path: "/", httpOnly: true, secure: true, maxAge: 0 });
        return await sendRedirect(event, "/login");
    }
});
