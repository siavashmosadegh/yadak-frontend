import Types from "./Types";

const initState = {
    showFilterModal: false,
    sortingItems: [
        {id: 0,title: "مرتبط ترین"},
        {id: 1,title: "پربازدید ترین"},
        {id: 2,title: "جدید ترین"},
        {id: 3,title: "پرفروش ترین"},
        {id: 4,title: "ارزان ترین"},
        {id: 5,title: "گران ترین"},
        {id: 6,title: "سریع ترین ارسال"},
        {id: 7,title: "پیشنهاد خریداران"},
        {id: 8,title: "منتخب"}
    ],
    selectedSort: null,
    showSortDrawer: false
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
        case Types.SELECT_SORTING_ITEM:
            return {
                ...state,
                selectedSort: action.data
            };
        case Types.SHOW_SORT_DRAWER:
            return {
                ...state,
                showSortDrawer: true
            };
        case Types.CLOSE_SORT_DRAWER:
            return {
                ...state,
                showSortDrawer: false
            };
        default:
            return state;
    }
}