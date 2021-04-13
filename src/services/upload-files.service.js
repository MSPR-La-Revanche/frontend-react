import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return http.post("http://localhost:8000/upload", formData, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": 'GET, PUT, POST, DELETE, OPTIONS'
            },
            onUploadProgress
        });
    }
}

export default new UploadFilesService();