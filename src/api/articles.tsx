import { axiosClient } from "./axios_client";

export const getPaginatedArticles = async (limit: number, page: number) => {
    return axiosClient.get("/topstories.json").then((res) => {
        return {
            totalPages: Math.ceil(res.data.length / limit),
            list: res.data.slice((page - 1) * limit, (page + 1) * limit)
        }
    });
};

export const getArticle = async (id: number) => {
    return axiosClient.get(`/item/${id}.json`).then((res) => {
        return res.data
    });
};
