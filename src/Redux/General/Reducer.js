import Types from './Types';

const initState = {
    counter: 0,
    loading: true,
    mainPageCategoriesItems: [],
    showResponsiveHeaderCategoriesModal: false
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
        case Types.SHOW_RESPONSIVE_HEADER_CATEGORIES_MODAL_HANDLER:
            return {
                ...state,
                showResponsiveHeaderCategoriesModal: true
            };
        case Types.CLOSE_RESPONSIVE_HEADER_CATEGORIES_MODAL_HANDLER:
            return {
                ...state,
                showResponsiveHeaderCategoriesModal: false
            };
        default:
            return state;
    }
}