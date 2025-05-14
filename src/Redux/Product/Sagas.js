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
        yield put({ type: Types.GET_SELECTED_PRODUCT_FEATURES_SUCCESS, payload: features });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_FEATURES_FAIL, error });
    }
}

function* watchGetSelectedProductFeatures() {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_FEATURES, getSelectedProductFeatures);
}

function* getSelectedProductInventory(action) {
    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined
    
    try {
        const result = yield call(() => fetch(`http://localhost:8080/api/v1/product-inventory/get-product-quantity/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_SELECTED_PRODUCT_INVENTORY_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_INVENTORY_FAIL, error });
    }
}

function* watchGetSelectedProductInventory () {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_INVENTORY, getSelectedProductInventory);
}

function* getSelectedProductCategory(action) {
    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined
    
    try {
        const result = yield call(() => fetch(`http://localhost:8080/api/v1/products/category/get-category-by-product-id/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_SELECTED_PRODUCT_CATEGORY_SUCCESS, payload: result.result[0] });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_CATEGORY_FAIL, error });
    }
}

function* watchGetSelectedProductCategory () {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_CATEGORY, getSelectedProductCategory);
}

function* getSelectedProductTypeBrand(action) {
    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined
    
    try {
        const result = yield call(() => fetch(`http://localhost:8080/api/v1/product-type-brand/get-brand-by-product-id/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_SELECTED_PRODUCT_TYPE_BRAND_SUCCESS, payload: result.result[0] });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_TYPE_BRAND_FAIL, error });
    }
}

function* watchGetSelectedProductTypeBrand () {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_TYPE_BRAND, getSelectedProductTypeBrand);
}

function* getSelectedProductCar(action) {
    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined
    
    try {
        const result = yield call(() => fetch(`http://localhost:8080/api/v1/car/get-car-by-product-id/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_SELECTED_PRODUCT_CAR_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_CAR_FAIL, error });
    }
}

function* watchGetSelectedProductCar () {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_CAR, getSelectedProductCar);
}

function* getSelectedProductProductType(action) {
    const { productID } = action.payload || {}; // This will default to an empty object if payload is undefined
    
    try {
        const result = yield call(() => fetch(`http://localhost:8080/api/v1/productType/get-product-type-by-product-Id/${productID}`).then(res => res.json()));
        yield put({ type: Types.GET_SELECTED_PRODUCT_PRODUCT_TYPE_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: Types.GET_SELECTED_PRODUCT_PRODUCT_TYPE_FAIL, error });
    }
}

function* watchGetSelectedProductProductType () {
    yield takeEvery(Types.GET_SELECTED_PRODUCT_PRODUCT_TYPE, getSelectedProductProductType);
}

export default function* Sagas() {
    yield all([
        fork(watchGetProductDetailsByProductID),
        fork(watchGetSelectedProductFeatures),
        fork(watchGetSelectedProductInventory),
        fork(watchGetSelectedProductCategory),
        fork(watchGetSelectedProductTypeBrand),
        fork(watchGetSelectedProductCar),
        fork(watchGetSelectedProductProductType)
    ]);
    // yield watchGetProductDetailsByProductID();
    // yield watchGetSelectedProductFeatures();
}