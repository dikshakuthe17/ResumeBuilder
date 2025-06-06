export const BASE_URL ="http://localhost:3000";

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER:"/api/auth/register",
        LOGIN: "/api/auth/login",
        GET_PROFILe: "/api/auth/profile",
    },
    RESUME: {
        CREATE: "/api/resume/create",
        GET_ALL: "/api/resume",
        GET_BY_ID: (id) => `/api/resume/${id}`,
        UPDATE: (id) => `/api/resume/${id}`,
        DELETE: (id) => `/api/resume/${id}`,
        UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
    },
    IMAGE: {
        UPLOAD_IMAGE: "/api/image/upload-image",
    }
};
export const UPLOADS_URL = `${BASE_URL}/uploads/`;