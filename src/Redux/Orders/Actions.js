import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const OrdersActions = {
    selectActiveOrderTab: DelegateAction(Types.SELECT_ACTIVE_ORDER_TAB)
}

export default OrdersActions;