import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const MainActions = {
    abcd: DelegateAction(Types.ABCD),
    efgh: DelegateAction(Types.EFGH),

    getItems: DelegateAction(Types.GET_ITEMS)
}

export default MainActions;