import Types from "./Types";
import DelegateAction from "../ActionDelegator";

const UserActions = {
    selectAddressHandler: DelegateAction(Types.SELECT_ADDRESS)
}

export const updateProfilePersonalInfoNames = (payload) => ({
    type: Types.UPDATE_PROFILE_PERSONAL_INFO_NAMES_REQUEST,
    payload
});

export const getProfilePersonalInfoRequest = () => ({
    type: Types.GET_PROFILE_PERSONAL_INFO_REQUEST
});

export default UserActions;