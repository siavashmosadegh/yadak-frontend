import Types from './Types';

const initState = {
    token: null,
    isLoggedIn: false
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.LOGOUT:
            return {
                ...state,
                token: null,
                isLoggedIn: false
            };
        case Types.LOGIN:
            return {
                ...state,
                token: "asdfasdfasdfasdfasdfasdfasdfasdf",
                isLoggedIn: true
            };
        default:
            return state;
    }
}