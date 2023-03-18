import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const CheckoutActions = {
    deleteEverythingHandler: DelegateAction(Types.DELETE_EVERYTHING),

    showChangeEditAddressModalHandler: DelegateAction(Types.SHOW_CHANGE_EDIT_ADDRESS_MODAL),
    closeChangeEditAddressModalHandler: DelegateAction(Types.CLOSE_CHANGE_EDIT_ADDRESS_MODAL)
}

export default CheckoutActions;