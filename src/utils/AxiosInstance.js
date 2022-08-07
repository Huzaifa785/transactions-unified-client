import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "https://transactions-unified.herokuapp.com/api"
}
);