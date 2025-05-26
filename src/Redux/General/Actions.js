import Types from "./Types";
import DelegateAction from "../ActionDelegator";

export const fetchProductCategories = () => ({
    type: Types.FETCH_PRODUCT_CATEGORIES
});

const MainActions = {
    abcd: DelegateAction(Types.ABCD),
    efgh: DelegateAction(Types.EFGH),

    getItems: DelegateAction(Types.GET_ITEMS),

    showResponsiveHeaderCategoriesModalHandler: DelegateAction(Types.SHOW_RESPONSIVE_HEADER_CATEGORIES_MODAL_HANDLER),
    closeResponsiveHeaderCategoriesModalHandler: DelegateAction(Types.CLOSE_RESPONSIVE_HEADER_CATEGORIES_MODAL_HANDLER)
}

export default MainActions;