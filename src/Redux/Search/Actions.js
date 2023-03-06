import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const SearchActions = {
    showFilterModalHandler: DelegateAction(Types.SHOW_FILTER_MODAL),
    closeFilterModalHandler: DelegateAction(Types.CLOSE_FILTER_MODAL)
}

export default SearchActions;