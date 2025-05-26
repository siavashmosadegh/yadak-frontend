import { call, put, takeEvery, all } from 'redux-saga/effects';
import Types from './Types';

function* generalSaga() {
  console.log(">>> generalSaga started");

  // Setup watcher directly with inline handler
  yield takeEvery(Types.FETCH_PRODUCT_CATEGORIES, function* () {
    console.log('>>> fetchProductCategories saga triggered');
    try {
      const products = yield call(() =>
        fetch('http://localhost:8080/api/v1/products/get-all-categories').then(res => res.json())
      );
      console.log("Fetched products:", products);
      yield put({ type: Types.FETCH_PRODUCT_CATEGORIES_SUCCESS, payload: products });
    } catch (error) {
      console.error("API failed:", error);
      yield put({ type: Types.FETCH_PRODUCT_CATEGORIES_FAIL, error });
    }
  });
}

export default function* GeneralSagas() {
  yield all([
    generalSaga()
  ]);
}