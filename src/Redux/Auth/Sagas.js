import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Types from './Types';

function* loginRequest(action) {

    
    const { mobile } = action.payload || {};

    console.log(mobile);

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
        console.log(result.token);
        yield put({ type: Types.LOGIN_SUCCESS, payload: { token: result.token } });
        
        // save token in localStorage
        localStorage.setItem('token', result.token);
    } catch (error) {
        yield put({ type: Types.LOGIN_FAILURE, error });
    }
}

function* watchLoginRequest() {
    yield takeEvery(Types.LOGIN_REQUEST, loginRequest);
}

export default function* Sagas() {
  yield all([
    fork(watchLoginRequest)
  ]);
}
