import axiosClient from './axiosClient.js';

export const getProductsByIdsApi = ({ ids }) => {
    return axiosClient.post('/products/bulk', { ids });
};

export const fetchProductCategoriesApi = () => {
    return axiosClient.get('/products/get-all-categories');
};