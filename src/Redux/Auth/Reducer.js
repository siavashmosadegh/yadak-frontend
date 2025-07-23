import Types from './Types';

const initState = {
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
    step: "initial"
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isLoggedIn: true,
                loading: false
            };
        case Types.LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                step: "initial",
                isLoggedIn: false
            };
        case Types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case Types.LOGIN_REQUEST_OTP_SUCCESS:
            return {
                ...state,
                step: "verify"
            };
        case Types.LOGIN_VERIFY_OTP_SUCCESS:
            return {
                ...state,
                step: "verified",
                token: action.payload.token,
                isLoggedIn: true
            };
        case Types.LOGIN_VERIFY_OTP_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}