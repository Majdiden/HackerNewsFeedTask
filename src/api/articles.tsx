import axios from "axios";

export const getPaginatedArticles = async (limit: number, page: number) => {
    return axios.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((res) => {
        return {
            totalPages: Math.ceil(res.data.length / limit),
            list: res.data.slice((page - 1) * limit, Math.min(((page - 1) * limit) + limit, res.data.length))
        }
    });
};

export const getArticle = async (id: number) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => {
        return res.data
    });
};
