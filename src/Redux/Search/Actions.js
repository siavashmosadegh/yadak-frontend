import Types from "./Types";
import DelegateAction from "../ActionDelegator";

export const searchProductByCategoryID = (category) => ({
    type: Types.SEARCH_PRODUCT_BY_CATEGORY_ID,
    payload: { category }, // Make sure payload has `category`
  });

const SearchActions = {
    showFilterModalHandler: DelegateAction(Types.SHOW_FILTER_MODAL),
    closeFilterModalHandler: DelegateAction(Types.CLOSE_FILTER_MODAL),

    selectSortingItemHandler: DelegateAction(Types.SELECT_SORTING_ITEM),

    showSortDrawerHandler: DelegateAction(Types.SHOW_SORT_DRAWER),
    closeSortDrawerHandler: DelegateAction(Types.CLOSE_SORT_DRAWER),

    // searchProductByCategoryID

    // searchProductByCategoryID: DelegateAction(Types.SEARCH_PRODUCT_BY_CATEGORY_ID, )

}

export default SearchActions;