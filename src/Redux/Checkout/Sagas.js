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

export default function* Sagas() {
  yield all([
    fork(watchGetCartViaUserId)
  ]);
}