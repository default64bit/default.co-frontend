import axios from "axios";

export const refreshAuthToken = async () => {
    await axios.post(`/auth/refresh`).catch((e) => {
        if (typeof e.response !== "undefined" && e.response.data) {
            console.error(e.response.data);
        }
        window.location.reload();
    });
};
