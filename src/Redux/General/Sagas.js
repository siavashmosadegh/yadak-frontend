import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import Types from "./Types";
import EndPoints from "./EndPoints";
import { axiosRequest } from "../../Request/ApiCaller";
import axios from "axios";
// function axiosRequest (url , method) {
//     return axios.request({
//         url: url,
//         method: method
//     });
// }

export function* GetItems() {
    // yield takeEvery(Types.GET_ITEMS, function* () {
    //     try {
    //         axios.get(EndPoints.GetItems)
    //             .then( (response) => {
    //                 console.log(response.data);
    //                 yield put({
    //                     type: Types.GET_ITEMS_SUCCESS,
    //                     data: response.data
    //                 });
    //             })
    //             .catch( (exception) => {
    //                 yield put({
    //                     type: Types.GET_ITEMS_EXCEPTION,
    //                     data: exception
    //                 });
    //             });
    //     } catch (e) {
    //         yield put({
    //             type: Types.GET_ITEMS_FAIL 
    //         });
    //     }
    // });
    yield takeEvery(Types.GET_ITEMS, function* () {
        try {
            const response = yield call(axios.get,'http://localhost:8000/api/v1/main');
            console.log(response);
            if (response.status) {
                yield put({
                    type: Types.GET_ITEMS_SUCCESS,
                    data: response.data.data.categories
                });
            } else {
                yield put({
                    type: Types.GET_ITEMS_EXCEPTION,
                });
            }
        } catch (e) {
            yield put({
                type: Types.GET_ITEMS_FAIL
            });
        }
    })
}

function* fetchProductCategories(action) {
    try {
        const products = yield call(() => fetch('http://localhost:8080/api/v1/products/get-all-categories').then(res => res.json()));
        yield put({ type: 'FETCH_PRODUCT_CATEGORIES_SUCCESS', payload: products });
    } catch (error) {
        yield put({ type: 'FETCH_PRODUCT_CATEGORIES_FAILURE', error });
    }
}
  
  // A watcher saga that listens for specific actions
function* watchFetchData() {
    yield takeEvery('FETCH_PRODUCT_CATEGORIES_REQUEST', fetchProductCategories);
}

export default function* GeneralSagas() {
    // yield all([
    //     fork(watchFetchData)
    // ]);
    yield watchFetchData(); // All watchers related to productSaga
}

