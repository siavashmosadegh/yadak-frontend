import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const OrdersActions = {
    selectActiveOrderTab: DelegateAction(Types.SELECT_ACTIVE_ORDER_TAB),
    selectActiveOpinionTab: DelegateAction(Types.SELECT_ACTIVE_OPINION_TAB),

    showSubmitOpinionModalHandler: DelegateAction(Types.SHOW_SUBMIT_OPINION_MODAL_HANDLER),
    closeSubmitOpinionModalHandler: DelegateAction(Types.CLOSE_SUBMIT_OPINION_MODAL_HANDLER),

    showEditOpinionModalHandler: DelegateAction(Types.SHOW_EDIT_OPINION_MODAL_HANDLER),
    closeEditOpinionModalHandler: DelegateAction(Types.CLOSE_EDIT_OPINION_MODAL_HANDLER),

    showDeleteOpinionModalHandler: DelegateAction(Types.SHOW_DELETE_OPINION_MODAL_HANDLER),
    closeDeleteOpinionModalHandler: DelegateAction(Types.CLOSE_DELETE_OPINION_MODAL_HANDLER)
}

export default OrdersActions;