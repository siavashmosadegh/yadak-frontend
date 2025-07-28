import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const UserActions = {
    selectAddressHandler: DelegateAction(Types.SELECT_ADDRESS)
}

export const updateProfilePersonalInfoNames = (firstName, lastName) => ({
    type: Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_REQUEST,
    payload: {
        firstName,
        lastName
    }
});

export default UserActions;