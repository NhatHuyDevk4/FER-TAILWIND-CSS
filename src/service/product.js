// services/product.service.ts
import { apiClient } from "./axiosClient";

export const fetchApiProduct = async (page) => {
    const res = await apiClient.get(`/products`, { params: { page } }); // sửa endpoint nếu khác
    return res.data;
};

export const fetchApiProductById = async (id) => {
    const res = await apiClient.get(`/products/${id}`); // sửa endpoint nếu khác
    return res.data;
};