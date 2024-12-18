import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0",
});
