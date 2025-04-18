import {
    takeEvery,
    call,
    put
} from "redux-saga/effects";
import Types from "./Types";

function* getProductDetailsByProductID(action) {

    // const { category } = action.payload; // Correctly extract `category`

    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined

    console.log('Received action payload:', productID);

    // console.log(`id: ${category}`);
    try {
        const product = yield call(() => fetch(`http://localhost:8080/api/v1/products/${productID}`).then(res => res.json()));
        console.log(product.oneProduct[0]);
        yield put({ type: Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID_SUCCESS, payload: product.oneProduct[0] });
    } catch (error) {
        yield put({ type: Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID_FAIL, error });
    }
}

function* watchGetProductDetailsByProductID() {
    yield takeEvery(Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID, getProductDetailsByProductID);
}

export default function* Sagas() {

    yield watchGetProductDetailsByProductID();

}