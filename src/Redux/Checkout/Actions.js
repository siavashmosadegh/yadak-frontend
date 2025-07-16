import Types from "./Types";
import DelegateAction from "../ActionDelegator";

export const getCartViaUserId = () => ({
    type: Types.GET_CART_VIA_USER_ID_REQUEST
});

export const increaseProductQuantityInCart = (productId, quantity) => ({
    type: Types.INCREASE_PRODUCT_QUANTITY_IN_CART_REQUEST,
    payload: {
        productId,
        quantity
    }
});

const CheckoutActions = {
    deleteEverythingHandler: DelegateAction(Types.DELETE_EVERYTHING),

    showChangeEditAddressModalHandler: DelegateAction(Types.SHOW_CHANGE_EDIT_ADDRESS_MODAL),
    closeChangeEditAddressModalHandler: DelegateAction(Types.CLOSE_CHANGE_EDIT_ADDRESS_MODAL),

    showConfirmSelectTimeAddressModalHandler: DelegateAction(Types.SHOW_CONFIRM_SELECT_TIME_ADDRESS_MODAL),
    closeConfirmSelectTimeAddressModalHandler: DelegateAction(Types.CLOSE_CONFIRM_SELECT_TIME_ADDRESS_MODAL)
}

export default CheckoutActions;