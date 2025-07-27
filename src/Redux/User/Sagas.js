import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

import {
    getProfilePersonalInfoNamesApi
} from '../../API/userApi';

function* getProfilePersonalInfoNames() {
    try {

        const result = yield call(getProfilePersonalInfoNamesApi); // returns axiosClient.get response

        yield put({ type: Types.GET_PROFILE_PERSONAL_INFO_NAMES_SUCCESS, payload: result.result });

    } catch (error) {

        yield put({
            type: Types.GET_PROFILE_PERSONAL_INFO_NAMES_FAILURE,
            error: error.response?.data?.message || 'Failed to fetch cart',
        });

    }
}

function* watchGetProfilePersonalInfoNames() {
    yield takeEvery(Types.GET_PROFILE_PERSONAL_INFO_NAMES_REQUEST, getProfilePersonalInfoNames);
}

export default function* Sagas() {
    yield all([
        fork(watchGetProfilePersonalInfoNames)
    ]);
}
