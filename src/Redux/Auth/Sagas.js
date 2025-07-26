import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';
import {
    verifyOtp,
    requestOtp
} from '../../API/authApi';

function* loginRequest(action) {

    const { mobile } = action.payload || {};

    try {
        const result = yield call(() =>
            fetch('http://localhost:8080/api/v1/login/via-phone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobile: mobile }),
            })
            .then(res => res.json())
        );
        yield put({ type: Types.LOGIN_SUCCESS, payload: { token: result.message } });
        
        // save token in localStorage
        localStorage.setItem('token', result.message);
    } catch (error) {
        yield put({ type: Types.LOGIN_FAILURE, error });
    }
}

function* watchLoginRequest() {
    yield takeEvery(Types.LOGIN_REQUEST, loginRequest);
}

function* loginRequestOtpRequest(action) {

    const { mobile } = action.payload || {};

    try {

        const result = yield call(requestOtp, { mobile });

        yield put({ type: Types.LOGIN_REQUEST_OTP_SUCCESS, payload: result });

    } catch (error) {

        yield put({
            type: Types.LOGIN_REQUEST_OTP_FAILURE,
            error: error.message || 'Failed to request OTP',
        });

    }
}

function* watchLoginRequestOtpRequest() {
    yield takeEvery(Types.LOGIN_REQUEST_OTP_REQUEST, loginRequestOtpRequest);
}

function* loginVerifyOtpRequest(action) {

    const { mobile, otp } = action.payload || {};

    try {

        const result = yield call(verifyOtp, { mobile, otp });

        yield put({ type: Types.LOGIN_VERIFY_OTP_SUCCESS, payload: result });

        localStorage.setItem('token', result.token);

    } catch (error) {

        yield put({
            type: Types.LOGIN_VERIFY_OTP_FAILURE,
            error: error.response.data.message || 'OTP verification failed',
        });

    }
}

function* watchLoginVerifyOtpRequest() {
    yield takeEvery(Types.LOGIN_VERIFY_OTP_REQUEST, loginVerifyOtpRequest);
}

export default function* Sagas() {
  yield all([
    fork(watchLoginRequest),
    fork(watchLoginRequestOtpRequest),
    fork(watchLoginVerifyOtpRequest)
  ]);
}
