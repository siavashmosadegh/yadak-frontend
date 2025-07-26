import axiosClient from './axiosClient.js'; // adjust path as needed

export const getCartViaUserIdApi = () => {
    return axiosClient.get('/cart/get-cart-via-user-id');
};

export const increaseProductQuantityInCartApi = ({ cartId, productId }) => {
    return axiosClient.post('/cart/increase-product-quantity-in-cart', {
        cartId,
        productId,
    });
};

export const decreaseProductQuantityInCartApi = ({ cartId, productId, cartItemId }) => {
    return axiosClient.post('/cart/decrease-product-quantity-in-cart', {
        cartId,
        productId,
        cartItemId,
    });
};

export const deleteEverythingFromCartViaCartIdApi = ({ cartId }) => {
    return axiosClient.delete('/cart/delete-everything-via-cart-id', {
        data: { cartId },
    });
};

export const getCartItemsViaCartIdApi = ({ cartId }) => {
    return axiosClient.post('/cart/get-cart-items-via-cart-id', {
        cartId
    });
};
