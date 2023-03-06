import Types from "./Types";

const initState = {
    showFilterModal: false
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SHOW_FILTER_MODAL:
            return {
                ...state,
                showFilterModal: true
            };
        case Types.CLOSE_FILTER_MODAL:
            return {
                ...state,
                showFilterModal: false
            };
        default:
            return state;
    }
}