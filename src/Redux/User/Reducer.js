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
    user: null
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SELECT_ADDRESS:
            return {
                ...state,
                selectedAddress: action.data
            };
        case Types.GET_PROFILE_PERSONAL_INFO_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}