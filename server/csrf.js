export const checkCsrf = (event, xsrfCookie) => {
    const { req } = event;

    // in GET method we don't need csrf checks
    if (req.method == "GET") return true;

    if (req.headers["x-xsrf-token"] === xsrfCookie) return true;
    else return false;
};
