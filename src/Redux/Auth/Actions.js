import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const loginRequest = (payload) => ({
    type: Types.LOGIN_REQUEST,
    payload,
});

const loginSuccess = (token) => ({
    type: Types.LOGIN_SUCCESS,
    token,
});

const loginFailure = (error) => ({
    type: Types.LOGIN_FAILURE,
    error,
});

const logout = () => ({
    type: Types.LOGOUT
});

const loginRequestOtpRequest = (payload) => ({
    type: Types.LOGIN_REQUEST_OTP_REQUEST,
    payload
});

const loginRequestOtpSuccess = (payload) => ({
    type: Types.LOGIN_REQUEST_OTP_SUCCESS,
    payload
});

const loginRequestOtpFailure = (error) => ({
    type: Types.LOGIN_REQUEST_OTP_FAILURE,
    error
});

export default {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    loginRequestOtpRequest,
    loginRequestOtpSuccess,
    loginRequestOtpFailure
};
