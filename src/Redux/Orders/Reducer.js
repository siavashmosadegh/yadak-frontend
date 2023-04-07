import Types from './Types';

const initState = {
    onGoingOrders: [
    ],
    successfulOrders: [
        {
            id: 0,
            title: "sefaresh",
            productId: 123232333,
            tracingNumber: "112323323",
            orderRegisterDate: Date.now(),
            receiverName: "ali",
            receiverMobile: "09128702302",
            address: "tehran",
            price: "123",
            profit: "123233",
            paymentMethod: "پرداخت اینترنتی",
            transferPrice: "3500",
            discount: "23222"
        },
        {
            id: 1,
            title: "sefaresh",
            productId: 123232333,
            tracingNumber: "112323323",
            orderRegisterDate: Date.now(),
            receiverName: "ali",
            receiverMobile: "09128702302",
            address: "tehran",
            price: "123",
            profit: null,
            paymentMethod: "پرداخت در محل",
            transferPrice: "3500",
            discount: null
        }
    ],
    returnedOrders: [
        {id: 0,title: "sefaresh"},
        {id: 1,title: "sefaresh"}
    ],
    canceledOrders: [
    ],
    activeOrdersTab: null
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SELECT_ACTIVE_ORDER_TAB:
            return {
                ...state,
                activeOrdersTab: action.data
            }
        default:
            return state;
    }
}