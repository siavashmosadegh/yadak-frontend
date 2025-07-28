import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

import {
    updateProfilePersonalInfoNamesApi
} from '../../API/userApi';

function* updateProfilePersonalInfoNames() {
    try {

        const result = yield call(updateProfilePersonalInfoNamesApi); // returns axiosClient.get response

        yield put({ type: Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_SUCCESS, payload: result.result });

    } catch (error) {

        yield put({
            type: Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_FAILURE,
            error: error.response?.data?.message || 'Failed to fetch cart',
        });

    }
}

function* watchUpdateProfilePersonalInfoNames() {
    yield takeEvery(Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_REQUEST, updateProfilePersonalInfoNames);
}

export default function* Sagas() {
    yield all([
        fork(watchUpdateProfilePersonalInfoNames)
    ]);
}
