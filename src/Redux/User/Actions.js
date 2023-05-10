import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const UserActions = {
    selectAddressHandler: DelegateAction(Types.SELECT_ADDRESS)
}

export default UserActions;