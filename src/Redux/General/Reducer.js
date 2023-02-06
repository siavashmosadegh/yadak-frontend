import Types from './Types';

const initState = {
    counter: 0,
    loading: true,
    mainPageCategoriesItems: []
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.ABCD:
            return {
                ...state,
                counter: state.counter + 1
            };
        case Types.EFGH:
            return {
                ...state,
                counter: state.counter - 1
            };
        case Types.GET_ITEMS:
            return {
                ...state,
                loading: true,
            };
        case Types.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                mainPageCategoriesItems: action.data
            };
        default:
            return state;
    }
}