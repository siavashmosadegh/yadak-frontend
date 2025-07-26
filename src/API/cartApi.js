import axiosClient from './axiosClient.js'; // adjust path as needed

export const getCartViaUserIdApi = () => {
    return axiosClient.get('/cart/get-cart-via-user-id');
}