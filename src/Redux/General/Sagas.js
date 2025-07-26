import { call, put, takeEvery, all } from 'redux-saga/effects';
import Types from './Types';

import {
    fetchProductCategoriesApi
} from '../../API/productApi';

function* fetchProductCategories() {
    try {

        const categories = yield call(fetchProductCategoriesApi);

        yield put({
            type: Types.FETCH_PRODUCT_CATEGORIES_SUCCESS,
            payload: categories,
        });

    } catch (error) {

        yield put({
            type: Types.FETCH_PRODUCT_CATEGORIES_FAIL,
            error: error.response?.data?.message || 'Failed to fetch product categories',
        });

    }
}

function* watchFetchProductCategories() {
    yield takeEvery(Types.FETCH_PRODUCT_CATEGORIES, fetchProductCategories);
}

export default function* GeneralSagas() {
    yield all([
        watchFetchProductCategories()
    ]);
}
