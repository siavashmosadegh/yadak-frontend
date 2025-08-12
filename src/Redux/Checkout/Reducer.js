import Types from './Types';
import routePaths from '../../Routes/NameSpace';

const initState = {
    shoppingBag: [],
    shoppingBagId: null,
    navigationItems: [
        {
            id: 0,
            title: "سبد خرید",
            icon: "ShoppingBagIconTwo",
            goTo: routePaths.checkoutCart,
            active: "/checkout/card",
            fill: "none"
        },
        {
            id: 1,
            title: "زمان و نحوه ارسال",
            icon: "TruckTransportIcon",
            goTo: routePaths.checkoutShipping,
            active: "/checkout/shipping",
            fill: "red"
        },
        {
            id: 2,
            title: "پرداخت",
            icon: "OnlinePaymentIcon",
            goTo: routePaths.checkoutPayment,
            active: "/checkout/payment",
            fill: "red"
        }
    ],
    showChangeEditAddressModal: false,
    showConfirmSelectTimeAddressModal: false,
    getCartLoading: false,
    getCartError: null,
    getCartItemsLoading: false,
    getCartItemsError: null,
    cartQuantityUpdateLoading: false,
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.DELETE_EVERYTHING: 
            return {
                ...state,
                shoppingBag: []
            };
        case Types.SHOW_CHANGE_EDIT_ADDRESS_MODAL:
            return {
                ...state,
                showChangeEditAddressModal: true
            };
        case Types.CLOSE_CHANGE_EDIT_ADDRESS_MODAL:
            return {
                ...state,
                showChangeEditAddressModal: false
            };
        case Types.SHOW_CONFIRM_SELECT_TIME_ADDRESS_MODAL:
            return {
                ...state,
                showConfirmSelectTimeAddressModal: true
            };
        case Types.CLOSE_CONFIRM_SELECT_TIME_ADDRESS_MODAL:
            return {
                ...state,
                showConfirmSelectTimeAddressModal: false
            };
        case Types.GET_CART_VIA_USER_ID_REQUEST:
            return {
                ...state,
                getCartLoading: true
            };
        case Types.GET_CART_VIA_USER_ID_SUCCESS:
            return {
                ...state,
                getCartLoading: false,
                shoppingBagId: action.payload.cartId
            };
        case Types.GET_CART_VIA_USER_ID_FAIL:
            return {
                ...state,
                getCartLoading: false,
                error: action.error
            };
        case Types.GET_CART_ITEMS_VIA_CART_ID_REQUEST:
            return {
                ...state,
                getCartItemsLoading: true
            };
        case Types.GET_CART_ITEMS_VIA_CART_ID_SUCCESS:
            return {
                ...state,
                shoppingBag: action.payload,
                getCartItemsLoading: false
            };
        case Types.GET_CART_ITEMS_VIA_CART_ID_FAIL:
            return {
                ...state,
                getCartItemsLoading: false,
                error: action.error
            };
        case Types.INCREASE_PRODUCT_QUANTITY_IN_CART_REQUEST:
            return {
                ...state,
                cartQuantityUpdateLoading: true
            };
        case Types.INCREASE_PRODUCT_QUANTITY_IN_CART_SUCCESS:
            return {
                ...state,
                shoppingBag: action.payload,
                cartQuantityUpdateLoading: false
            };
        case Types.INCREASE_PRODUCT_QUANTITY_IN_CART_FAIL:
            return {
                ...state,
                cartQuantityUpdateLoading: false
            };
        case Types.DECREASE_PRODUCT_QUANTITY_IN_CART_REQUEST:
            return {
                ...state,
                cartQuantityUpdateLoading: true
            };
        case Types.DECREASE_PRODUCT_QUANTITY_IN_CART_SUCCESS:
            return {
                ...state,
                shoppingBag: action.payload,
                cartQuantityUpdateLoading: false
            };
        case Types.DECREASE_PRODUCT_QUANTITY_IN_CART_FAIL:
            return {
                ...state,
                cartQuantityUpdateLoading: false
            };
        default:
            return state;
    }
}