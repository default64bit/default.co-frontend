import axios from "axios";

export class ckUploadAdapter {
    constructor(loader) {
        this.loader = loader;
        this.controller = new AbortController();
    }

    upload() {
        return this.loader.file.then((file) => {
            return new Promise(async (resolve, reject) => {
                const data = new FormData();
                data.append("upload", file);

                await axios
                    .post("/api/v1/admin/upload-editor-images", data, {
                        onUploadProgress: (e) => {
                            this.loader.uploadTotal = e.total;
                            this.loader.uploaded = e.progress;
                        },
                        signal: this.controller.signal,
                    })
                    .then((response) => {
                        resolve({ default: response.data.url });
                    })
                    .catch((error) => {
                        if (!error.response || error.response.data) reject(!error.response || error.response.data ? error.response.data.error : "Error");
                    });
            });
        });
    }

    abort() {
        if (this.controller) this.controller.abort();
    }
}
