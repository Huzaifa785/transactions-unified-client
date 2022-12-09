import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "https://transactions-unified-backend.vercel.app/api"
}
);