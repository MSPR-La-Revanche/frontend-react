import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return http.post("http://localhost:8000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return http.get("/files");
    }
}

export default new UploadFilesService();