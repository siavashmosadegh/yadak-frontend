import Types from './Types';

const initState = {
    onGoingOrders: [
        {
            id: 0,
            title: "سفارش جادی",
            productId: "asdfsdf", // کد محصول
            tracingNumber: "123123123213", // کد پیگیری سفارش
            orderRegisterDate: Date.now(), // تاریخ ثبت سفارش
            recieverName: "asdfasdf", // نام تحویل گیرنده
            recieverMobile: "09128702302", // شماره موبایل تحویل گیرنده
            address: "tehran", // آدرس
            status: "آماده سازی سفارش", // وضعیت سفارش
            orderReceivingDate: Date.now(), // زمان تحویل
            transferPrice: "3500", // هزینه ارسال
            sentItemTracingNumber: "194154961", // کد پیگیری مرسوله
            sentItemReceiveCode: "81841", // کد تحویل مرسوله
            price: "123", // قیمت
            // profit: "123233", // سود
            paymentMethod: "پرداخت اینترنتی", // روش پرداخت
            transferPrice: "3500", // هزینه ارسال
            discount: "23222" // تخفیف
        },
        {
            id: 1,
            title: "سفارش جادی",
            productId: "asdfsdf",
            tracingNumber: "123123123213",
            orderRegisterDate: Date.now(),
            recieverName: "asdfasdf",
            recieverMobile: "09128702302",
            address: "tehran",
            status: "پردازش شده",
            orderReceivingDate: Date.now(),
            transferPrice: "3500",
            sentItemTracingNumber: "194154961",
            sentItemReceiveCode: "81841",
            price: "123",
            // profit: null,
            paymentMethod: "پرداخت در محل",
            transferPrice: "3500",
            discount: null
        }
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
            // profit: "123233",
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
            // profit: null,
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