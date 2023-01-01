import axios from "axios";
import { setCookie } from "h3";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!process.server) return;

    // if token dosent exist redirect to login page
    const token = useCookie("AuthToken");
    if (!token.value) return navigateTo("/login");

    // if token exist check if its valid or not
    const isTokenValid = await axios
        .get(`${process.env.API_BASE_URL}/api/v1/admin/check`)
        .then((response) => true)
        .catch((e) => {
            console.log({ e: e });
            return false;
        });

    console.log({ isTokenValid });

    // if token is not valid delete the token and redirect to login page
    // if (!isTokenValid) {
    //     if (process.server) {
    //         const nuxtApp = useNuxtApp();
    //         const event = useRequestEvent(nuxtApp);
    //         setCookie(event, "AuthToken", "", { sameSite: "strict", path: "/", httpOnly: true, secure: true, maxAge: 0 });
    //     }
    //     return navigateTo("/login");
    // }
});
