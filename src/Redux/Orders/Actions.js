import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const OrdersActions = {
    selectActiveOrderTab: DelegateAction(Types.SELECT_ACTIVE_ORDER_TAB),
    selectActiveOpinionTab: DelegateAction(Types.SELECT_ACTIVE_OPINION_TAB)
}

export default OrdersActions;