import axios from "axios";
import { google } from "googleapis";
import { setCookie } from "h3";

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_LOGIN_CLIENT_ID,
    process.env.GOOGLE_LOGIN_CLIENT_SECRET,
    `${process.env.BASE_URL}/auth/login/google/callback`
);

const getAuthToken = async (req, data) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
    const token = await axios
        .post(
            `${process.env.API_BASE_URL}/auth/continue-with-google`,
            { ...data },
            { timeout: 15 * 1000, headers: { ...req.headers, "x-forwarded-for": ip, serversecret: process.env.SERVER_SECRET, tt: Date.now() } }
        )
        .then((response) => response.data.token)
        .catch((error) => {
            if (typeof error.response === "undefined") console.error({ error });
            console.error({ error: error.response.data });
        });
    return token;
};

export default defineEventHandler(async (event) => {
    const { req, res } = event.node;
    const inputs = getQuery(event);
    let redirectPath = "/login";

    const { tokens } = await oauth2Client.getToken(inputs.code);

    // const v = await oauth2Client.verifyIdToken({ idToken: tokens.id_token }).catch((e) => console.log(e));
    // console.log({ v });

    await axios
        .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokens.access_token}`, {
            headers: { "Content-Type": "application/json", "Accept-Encoding": "application/json" },
        })
        .then(async (response) => {
            // console.log({ data: response.data });

            // request the back-end and set a auth-token
            const token = await getAuthToken(req, { profile: response.data, email: response.data.email });
            if (!token) {
                redirectPath = "/login?error=1";
                return;
            }

            setCookie(event, "AuthToken", token, { sameSite: "strict", path: "/", httpOnly: true, secure: true, maxAge: 3600 });
        })
        .catch((error) => {
            if (typeof error.response === "undefined") console.error({ error });
            console.error({ error: error.response.data });
            redirectPath = "/login?error=1";
        });

    await sendRedirect(event, redirectPath);

    // return { platform: event.context.params.platform };
});
