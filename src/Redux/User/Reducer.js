import Types from "./Types";

const initState = {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    addresses: [
        {id: 0,title: "ونک / نیلو / برزیل",zipCode: 1435685867,houseNumber: 4},
        {id: 1,title: "میدان رسالت / میدان رسالت / میدان رسالت / میدان رسالت / میدان رسالت /",zipCode: 1435685867,houseNumber: null}
    ],
    selectedAddress: null
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SELECT_ADDRESS:
            return {
                ...state,
                selectedAddress: action.data
            };
        default:
            return state;
    }
}