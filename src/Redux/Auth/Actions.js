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

export default {
    loginRequest,
    loginSuccess,
    loginFailure
};