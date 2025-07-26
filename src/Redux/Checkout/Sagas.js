import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

import {
    getCartViaUserIdApi,
    increaseProductQuantityInCartApi,
    decreaseProductQuantityInCartApi
} from '../../API/cartApi';

function* getCartViaUserId() {
    try {

        const result = yield call(getCartViaUserIdApi); // returns axiosClient.get response

        yield put({ type: Types.GET_CART_VIA_USER_ID_SUCCESS, payload: result.result });

    } catch (error) {

        yield put({
            type: Types.GET_CART_VIA_USER_ID_FAIL,
            error: error.response?.data?.message || 'Failed to fetch cart',
        });

    }
}

function* watchGetCartViaUserId() {
    yield takeEvery(Types.GET_CART_VIA_USER_ID_REQUEST, getCartViaUserId);
}

function* increaseProductQuantityInCart(action) {
    try {

        const { cartId, productId } = action.payload;

        const result = yield call(increaseProductQuantityInCartApi, { cartId, productId });

        yield put({ type: Types.INCREASE_PRODUCT_QUANTITY_IN_CART_SUCCESS, payload: result });

    } catch (error) {

        yield put({
            type: Types.INCREASE_PRODUCT_QUANTITY_IN_CART_FAIL,
            error: error.response?.data?.message || 'Failed to increase product quantity',
        });

    }
}

function* watchIncreaseProductQuantityInCart() {
    yield takeEvery(Types.INCREASE_PRODUCT_QUANTITY_IN_CART_REQUEST, increaseProductQuantityInCart);
}

function* fetchCartItemsFromAPI(cartId) {
    const res = yield fetch('http://localhost:8080/api/v1/cart/get-cart-items-via-cart-id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ cartId }),
    });

    return yield res.json();
}

function* fetchProductsByIdsAPI(productIds) {
    const res = yield fetch('http://localhost:8080/api/v1/products/bulk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ids: productIds }),
    });

    //console.log(`res.json.products: ${res.json().products[0].ProductID}`)

    return yield res.json();
}


function* getCartItemsViaCartId(action) {
    try {
        const { cartId } = action.payload;

        // Step 1: Fetch raw cart items
        const cartItems = yield call(fetchCartItemsFromAPI, cartId); // returns [{productId, quantity, ...}]

        // Step 2: Extract product IDs
        const productIds = cartItems.result.map(item => item.ProductID);

        // Step 3: Call your new API to get product details
        const products = yield call(fetchProductsByIdsAPI, productIds); // returns [{id, name, price, imageUrl}]

        // Step 4: Merge product details into cart items
        const enrichedCartItems = cartItems.result.map(item => {
            const product = products.products.find(p => p.ProductID === item.ProductID);
            return {
                ...item,
                product,
            };
        });

        // Step 5: Dispatch success with enriched items
        yield put({
            type: Types.GET_CART_ITEMS_VIA_CART_ID_SUCCESS,
            payload: enrichedCartItems,
        });

    } catch (error) {
        yield put({
            type: Types.GET_CART_ITEMS_VIA_CART_ID_FAIL,
            error: error.message || 'Failed to fetch cart',
        });
    }
}

function* watchGetCartItemsViaCartId() {
    yield takeEvery(Types.GET_CART_ITEMS_VIA_CART_ID_REQUEST, getCartItemsViaCartId);
}

function* deleteEverythingFromCartViaCartId(action) {
    try {
        const { cartId } = action.payload;

        const result = yield call(() =>
            fetch(`http://localhost:8080/api/v1/cart/delete-everything-via-cart-id`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                },
                body: JSON.stringify({ cartId })
            })
            .then(res => res.json())
        );
        yield put({ type: Types.DELETE_EVERYTHING_FROM_CART_VIA_CART_ID_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: Types.DELETE_EVERYTHING_FROM_CART_VIA_CART_ID_FAIL, error });
    }
}

function* watchDeleteEverythingFromCartViaCartId() {
    yield takeEvery(Types.DELETE_EVERYTHING_FROM_CART_VIA_CART_ID_REQUEST, deleteEverythingFromCartViaCartId)
}

function* decreaseProductQuantityInCart(action) {
    try {

        const { cartId, productId, cartItemId } = action.payload;

        const result = yield call(decreaseProductQuantityInCartApi, {
            cartId,
            productId,
            cartItemId,
        });

        yield put({
            type: Types.DECREASE_PRODUCT_QUANTITY_IN_CART_SUCCESS,
            payload: result,
        });

    } catch (error) {

        yield put({
            type: Types.DECREASE_PRODUCT_QUANTITY_IN_CART_FAIL,
            error: error.response?.data?.message || 'Failed to decrease product quantity',
        });

    }
}

function* watchDecreaseProductQuantityInCart() {
    yield takeEvery(Types.DECREASE_PRODUCT_QUANTITY_IN_CART_REQUEST, decreaseProductQuantityInCart);
}

export default function* Sagas() {
    yield all([
        fork(watchGetCartViaUserId),
        fork(watchIncreaseProductQuantityInCart),
        fork(watchGetCartItemsViaCartId),
        fork(watchDeleteEverythingFromCartViaCartId),
        fork(watchDecreaseProductQuantityInCart)
    ]);
}