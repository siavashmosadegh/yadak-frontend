import Types from './Types';

const initState = {
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
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
            return {
                ...state,
                token: null,
                isLoggedIn: false
            };
        case Types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
        };
        default:
            return state;
    }
}