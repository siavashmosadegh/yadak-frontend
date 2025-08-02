import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

import {
    updateProfilePersonalInfoNamesApi,
    getProfilePersonalInfoRequestApi,
    updateProfilePersonalInfoNationalCodeApi
} from '../../API/userApi';

function* updateProfilePersonalInfoNames(action) {

    const { firstname, lastname } = action.payload || {};

    try {

        const result = yield call(updateProfilePersonalInfoNamesApi , {firstname, lastname}); // returns axiosClient.get response

        yield put({ type: Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_SUCCESS, payload: result?.updatedRecord[0] });

    } catch (error) {

        yield put({
            type: Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_FAILURE,
            error: error.response?.data?.message || 'Failed to fetch',
        });

    }
}

function* watchUpdateProfilePersonalInfoNames() {
    yield takeEvery(Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_REQUEST, updateProfilePersonalInfoNames);
}

function* getProfilePersonalInfoRequest() {
    try {

        const result = yield call(getProfilePersonalInfoRequestApi);

        yield put({ type: Types.GET_PROFILE_PERSONAL_INFO_SUCCESS, payload: result.user });

    } catch (error) {

        yield put({
            type: Types.GET_PROFILE_PERSONAL_INFO_FAILURE,
            error: error.response?.data?.message || 'Failed to fetch cart',
        });

    }
}

function* watchGetProfilePersonalInfoRequest() {

    console.log("TRIGGERED !!!")

    yield takeEvery(Types.GET_PROFILE_PERSONAL_INFO_REQUEST, getProfilePersonalInfoRequest);
}

function* updateProfilePersonalInfoNationalCode(action) {

    const { nationalCode } = action.payload || {};

    try {

        const result = yield call(updateProfilePersonalInfoNationalCodeApi, {nationalCode} );

        yield put({ type: Types.UPDATE_PROFILE_PERSONAL_INFO_NATIONAL_CODE_SUCCESS, payload: result?.result[0] });

    } catch (error) {

        yield put ({
            type: Types.UPDATE_PROFILE_PERSONAL_INFO_NATIONAL_CODE_FAILURE,
            error: error.response?.data?.message || 'failed to update national code',
        });

    }
}

function* watchUpdateProfilePersonalInfoNationalCode() {
    yield takeEvery(Types.UPDATE_PROFILE_PERSONAL_INFO_NATIONAL_CODE_REQUEST, updateProfilePersonalInfoNationalCode)
}

export default function* Sagas() {
    yield all([
        fork(watchUpdateProfilePersonalInfoNames),
        fork(watchGetProfilePersonalInfoRequest),
        fork(watchUpdateProfilePersonalInfoNationalCode)
    ]);
}
