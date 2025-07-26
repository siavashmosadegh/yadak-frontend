import axiosClient from './axiosClient.js';

export const getProductsByIdsApi = ({ ids }) => {
    return axiosClient.post('/products/bulk', { ids });
};