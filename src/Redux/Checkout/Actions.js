import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const CheckoutActions = {
    deleteEverythingHandler: DelegateAction(Types.DELETE_EVERYTHING)
}

export default CheckoutActions;