import Types from './Types';

const initState = {
    onGoingOrders: [
        {
            id: 0,
            title: "سفارش جادی",
            productId: "asdfsdf", // کد محصول
            tracingNumber: "123123123213", // کد پیگیری سفارش
            orderRegisterDate: "1998-01-15T00:00:00", // تاریخ ثبت سفارش
            recieverName: "asdfasdf", // نام تحویل گیرنده
            recieverMobile: "09128702302", // شماره موبایل تحویل گیرنده
            address: "karaj", // آدرس
            orderLink: "/profile/orders/code-12345678",
            status: "آماده سازی سفارش", // وضعیت سفارش
            nextStepStatus: "پردازش شده", // مرحله بعد
            orderReceivingDate: Date.now(), // زمان تحویل
            transferPrice: 3500, // هزینه ارسال
            sentItemTracingNumber: "194154961", // کد پیگیری مرسوله
            sentItemReceiveCode: "81841", // کد تحویل مرسوله
            price: "123", // قیمت
            // profit: "123233", // سود
            paymentMethod: "پرداخت اینترنتی", // روش پرداخت
            discount: "23222" // تخفیف
        },
        {
            id: 1,
            title: "سفارش جادی",
            productId: "asdfsdf",
            tracingNumber: "123123123213",
            orderRegisterDate: "2023-01-15T00:00:00",
            recieverName: "asdfasdf",
            recieverMobile: "09128702302",
            address: "tehran",
            orderLink: "/profile/orders/code-23456789",
            status: "پردازش شده",
            nextStepStatus: null,
            orderReceivingDate: "2024-01-15T00:00:00",
            transferPrice: 3500,
            sentItemTracingNumber: "194154961",
            sentItemReceiveCode: "81841",
            price: "123",
            // profit: null,
            paymentMethod: "پرداخت در محل",
            discount: null
        }
    ],
    successfulOrders: [
        {
            id: 0,
            title: "sefaresh",
            productId: 123232333,
            tracingNumber: "112323323",
            orderRegisterDate: "2024-01-15T00:00:00",
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
            orderRegisterDate: "2024-02-15T00:00:00",
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
        {
            id: 0,
            title: "sefaresh",
            status: "لغو سیستمی",
            orderRegisterDate: "2023-03-15T00:00:00",
            orderCode: "123232323",
            price: "18000",
            discount: "800"
        },
        {
            id: 1,
            title: "sefaresh",
            status: "لغو سیستمی",
            orderRegisterDate: "2023-03-15T00:00:00",
            orderCode: "123232323",
            price: "18000",
            discount: null
        }
    ],
    selectedOrder: null,
    activeOrdersTab: null,
    activeOpinionsTab: null,
    showSubmitOpinionModal: false,
    showEditOpinionModal: false,
    showDeleteOpinionModal: false
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SELECT_ACTIVE_ORDER_TAB:
            return {
                ...state,
                activeOrdersTab: action.data
            };
        case Types.SELECT_ACTIVE_OPINION_TAB:
            return {
                ...state,
                activeOpinionsTab: action.data
            };
        case Types.SHOW_SUBMIT_OPINION_MODAL_HANDLER:
            return {
                ...state,
                showSubmitOpinionModal: true
            };
        case Types.CLOSE_SUBMIT_OPINION_MODAL_HANDLER:
            return {
                ...state,
                showSubmitOpinionModal: false
            };
        case Types.SHOW_EDIT_OPINION_MODAL_HANDLER:
            return {
                ...state,
                showEditOpinionModal: true
            };
        case Types.CLOSE_EDIT_OPINION_MODAL_HANDLER:
            return {
                ...state,
                showEditOpinionModal: false
            };
        case Types.SHOW_DELETE_OPINION_MODAL_HANDLER:
            return {
                ...state,
                showDeleteOpinionModal: true
            };
        case Types.CLOSE_DELETE_OPINION_MODAL_HANDLER:
            return {
                ...state,
                showDeleteOpinionModal: false
            };
        case Types.SELECT_ORDER:
            return {
                ...state,
                selectedOrder: action.data
            };
        default:
            return state;
    }
}