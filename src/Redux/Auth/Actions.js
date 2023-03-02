import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const AuthActions = {
    // abcd: DelegateAction(Types.ABCD),
    // efgh: DelegateAction(Types.EFGH),
    // getItems: DelegateAction(Types.GET_ITEMS)
    logout: DelegateAction(Types.LOGOUT),
    login: DelegateAction(Types.LOGIN)
}

export default AuthActions;