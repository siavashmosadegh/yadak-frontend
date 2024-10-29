import {
    takeEvery,
    call,
    put
} from "redux-saga/effects";
import Types from "./Types";

function* searchProductByCategoryID(action) {

    // const { category } = action.payload; // Correctly extract `category`

    const { category } = action.payload || {}; // This will default to an empty object if payload is undefined

    console.log('Received action payload:', category);

    // console.log(`id: ${category}`);
    try {
        const products = yield call(() => fetch(`http://localhost:8080/api/v1/products/category/${category}`).then(res => res.json()));
        yield put({ type: Types.SEARCH_PRODUCT_BY_CATEGORY_ID_SUCCESS, payload: products });
    } catch (error) {
        yield put({ type: Types.SEARCH_PRODUCT_BY_CATEGORY_ID_FAIL, error });
    }
}

function* watchSearchProductByCategoryID() {
    yield takeEvery(Types.SEARCH_PRODUCT_BY_CATEGORY_ID, searchProductByCategoryID);
}

export default function* SearchSagas() {

    yield watchSearchProductByCategoryID();

}