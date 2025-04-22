import {
    takeEvery,
    call,
    put,
    all,
    fork
} from "redux-saga/effects";
import Types from "./Types";

function* getProductDetailsByProductID(action) {

    // const { category } = action.payload; // Correctly extract `category`

    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined

    try {
        const product = yield call(() => fetch(`http://localhost:8080/api/v1/products/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID_SUCCESS, payload: product.oneProduct[0] });
    } catch (error) {
        yield put({ type: Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID_FAIL, error });
    }
}

function* watchGetProductDetailsByProductID() {
    yield takeEvery(Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID, getProductDetailsByProductID);
}

function* getSelectedProductFeatures(action) {
    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined
    
    try {
        const features = yield call(() => fetch(`http://localhost:8080/api/v1/product-features/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_SELECTED_PRODUCT_FEATURES_SUCCESS, payload: JSON.stringify(features, null, 2) });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_FEATURES_FAIL, error });
    }
}

function* watchGetSelectedProductFeatures() {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_FEATURES, getSelectedProductFeatures);
}

export default function* Sagas() {
    yield all([
        fork(watchGetProductDetailsByProductID),
        fork(watchGetSelectedProductFeatures)
    ]);
    // yield watchGetProductDetailsByProductID();
    // yield watchGetSelectedProductFeatures();
}