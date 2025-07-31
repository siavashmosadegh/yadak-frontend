import Types from "./Types";

const initState = {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    addresses: [
        {id: 0,title: "ونک / نیلو / برزیل",zipCode: 1435685867,houseNumber: 4},
        {id: 1,title: "میدان رسالت / میدان رسالت / میدان رسالت / میدان رسالت / میدان رسالت /",zipCode: 1435685867,houseNumber: null}
    ],
    selectedAddress: null,
    user: null,
    loading: false
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SELECT_ADDRESS:
            return {
                ...state,
                selectedAddress: action.data
            };
        case Types.GET_PROFILE_PERSONAL_INFO_REQUEST:
            return {
                ...state,
                loading: true
            };
        case Types.GET_PROFILE_PERSONAL_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case Types.GET_PROFILE_PERSONAL_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}