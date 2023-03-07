import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const SearchActions = {
    showFilterModalHandler: DelegateAction(Types.SHOW_FILTER_MODAL),
    closeFilterModalHandler: DelegateAction(Types.CLOSE_FILTER_MODAL),

    selectSortingItemHandler: DelegateAction(Types.SELECT_SORTING_ITEM),

    showSortDrawerHandler: DelegateAction(Types.SHOW_SORT_DRAWER),
    closeSortDrawerHandler: DelegateAction(Types.CLOSE_SORT_DRAWER)
}

export default SearchActions;