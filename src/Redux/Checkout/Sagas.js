import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

function* getCartViaUserId() {
    try {
        const result = yield call(() =>
            fetch('http://localhost:8080/api/v1/cart/get-cart-via-user-id', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
            })
            .then(res => res.json())
        );
        yield put({ type: Types.GET_CART_VIA_USER_ID_SUCCESS, payload: result.result });
    } catch (error) {
        yield put({ type: Types.GET_CART_VIA_USER_ID_FAIL, error });
    }
}

function* watchGetCartViaUserId() {
    yield takeEvery(Types.GET_CART_VIA_USER_ID_REQUEST, getCartViaUserId);
}

function* increaseProductQuantityInCart(action) {
    try {
        const { cartId, productId } = action.payload;
        const result = yield call(() =>
            fetch(`http://localhost:8080/api/v1/cart/increase-product-quantity-in-cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                },
                body: JSON.stringify({ cartId, productId })
            })
            .then(res => res.json())
        );
        yield put({ type: Types.INCREASE_PRODUCT_QUANTITY_IN_CART_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: Types.INCREASE_PRODUCT_QUANTITY_IN_CART_FAIL, error });
    }
}

function* watchIncreaseProductQuantityInCart() {
    yield takeEvery(Types.INCREASE_PRODUCT_QUANTITY_IN_CART_REQUEST, increaseProductQuantityInCart);
}

function* getCartItemsViaCartId (action) {
    try {
        const { cartId } = action.payload;

        const result = yield call(() =>
            fetch(`http://localhost:8080/api/v1/cart/get-cart-items-via-cart-id`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                },
                body: JSON.stringify({ cartId })
            })
            .then(res => res.json())
        );
        yield put({ type: Types.GET_CART_ITEMS_VIA_CART_ID_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: Types.GET_CART_ITEMS_VIA_CART_ID_FAIL, error });
    }

}

function* watchGetCartItemsViaCartId() {
    yield takeEvery(Types.GET_CART_ITEMS_VIA_CART_ID_REQUEST, getCartItemsViaCartId);
}

export default function* Sagas() {
    yield all([
        fork(watchGetCartViaUserId),
        fork(watchIncreaseProductQuantityInCart),
        fork(watchGetCartItemsViaCartId)
    ]);
}