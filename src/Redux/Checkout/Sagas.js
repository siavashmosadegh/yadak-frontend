import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

import {
    getCartViaUserIdApi,
    increaseProductQuantityInCartApi,
    decreaseProductQuantityInCartApi,
    deleteEverythingFromCartViaCartIdApi,
    getCartItemsViaCartIdApi
} from '../../API/cartApi';

import {
    getProductsByIdsApi
} from '../../API/productApi';

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

function* getCartItemsViaCartId(action) {
    try {
        const { cartId } = action.payload;

        // Step 1: Fetch raw cart items
        const cartItemsResponse = yield call(getCartItemsViaCartIdApi, { cartId });

        const cartItems = cartItemsResponse.result;

        // Step 2: Extract product IDs
        const productIds = cartItems.map(item => item.ProductID);

        // Step 3: Fetch product details
        const productsResponse = yield call(getProductsByIdsApi, { ids: productIds });

        const products = productsResponse.products;

        // Step 4: Merge product details with cart items
        const enrichedCartItems = cartItems.map(item => {
            const product = products.find(p => p.ProductID === item.ProductID);
            return {
                ...item,
                product,
            };
        });

        // Step 5: Dispatch success
        yield put({
            type: Types.GET_CART_ITEMS_VIA_CART_ID_SUCCESS,
            payload: enrichedCartItems,
        });

    } catch (error) {
        yield put({
            type: Types.GET_CART_ITEMS_VIA_CART_ID_FAIL,
            error: error.response?.data?.message || error.message || 'Failed to fetch cart items',
        });
    }
}

function* watchGetCartItemsViaCartId() {
    yield takeEvery(Types.GET_CART_ITEMS_VIA_CART_ID_REQUEST, getCartItemsViaCartId);
}

function* deleteEverythingFromCartViaCartId(action) {
    try {

        const { cartId } = action.payload;

        const result = yield call(deleteEverythingFromCartViaCartIdApi, { cartId });

        yield put({
            type: Types.DELETE_EVERYTHING_FROM_CART_VIA_CART_ID_SUCCESS,
            payload: result,
        });

    } catch (error) {

        yield put({
            type: Types.DELETE_EVERYTHING_FROM_CART_VIA_CART_ID_FAIL,
            error: error.response?.data?.message || 'Failed to delete cart items',
        });

    }
}

function* watchDeleteEverythingFromCartViaCartId() {
    yield takeEvery(Types.DELETE_EVERYTHING_FROM_CART_VIA_CART_ID_REQUEST,deleteEverythingFromCartViaCartId);
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