import axios from "axios";
import { setCookie } from "h3";

const getAuthToken = async (req, data) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;

    delete req.headers["content-length"];
    delete req.headers["host"];

    const token = await axios
        .post(
            `${process.env.API_BASE_URL}/auth/refresh`,
            { ...data },
            { timeout: 15 * 1000, headers: { ...req.headers, "x-forwarded-for": ip, serversecret: process.env.SERVER_SECRET, tt: Date.now() } }
        )
        .then((response) => response.data.token)
        .catch((error) => {
            if (typeof error.response === "undefined") console.error({ error });
            else console.error({ error: error.response.data });
        });
    return token;
};

export default defineEventHandler(async (event) => {
    const { req, res } = event.node;
    let maxAge = 3600;

    // ====================
    // TODO : token is empty and therefore is not setting... need to be fixed
    // works fine on localhost but not on vercel and railway
    // tested the api endpoint on railway btw... seems to be working fine

    // results of some digging:
    // seems that token can't be verified becuse eveytime system on railway redeploys it deletes old file including images
    // and pem keys... so the tokens cant be verified... if we want to continue with this we have 2 options:
    // 1 - no more refresh tokens
    // 2 - no more verfication with pem keys
    // ====================

    // request the back-end and set new auth-token
    const token = await getAuthToken(req, { profile: "test", email: "test" });
    // if (!token) maxAge = 0;

    if (!!token) setCookie(event, "AuthToken", token, { sameSite: "strict", path: "/", httpOnly: true, secure: true, maxAge: maxAge });

    // return res.end(JSON.stringify({ token }));
    return;
});
