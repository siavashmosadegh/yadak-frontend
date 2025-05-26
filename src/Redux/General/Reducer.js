import Types from './Types';

const initState = {
    counter: 0,
    loading: true,
    mainPageCategoriesItems: [],
    showResponsiveHeaderCategoriesModal: false,
    error: null,
    menuData: [
        {
            id: 0,
            headerTitle: "قطعات بدنه",
            goTo: "/search/قطعات_بدنه",
            items: [
                {id: 0,itemTitle: "بدنه و شیشه",goTo: "",subItems: [
                    {id: 0,subItemTitle: "کاپوت",goTo: "/کاپوت"},
                    {id: 0,subItemTitle: "درب صندوق عقب",goTo: "/درب صندوق عقب"},
                    {id: 0,subItemTitle: "سپر",goTo: "/سپر"},
                    {id: 0,subItemTitle: "درب ماشین",goTo: "/درب ماشین"},
                    {id: 0,subItemTitle: "گلگیر",goTo: "/گلگیر"}
                ]},
                {id: 1,itemTitle: "قطعات روشنایی",goTo: "",subItems: [
                    {id: 0,subItemTitle: "چراغ ماشین",goTo: ""},
                    {id: 0,subItemTitle: "مه شکن",goTo: ""},
                    {id: 0,subItemTitle: "پروژکتور ماشین",goTo: ""},
                    {id: 0,subItemTitle: "چراغ خطر سوم",goTo: ""},
                    {id: 0,subItemTitle: "دی لایت",goTo: ""}
                ]},
                {id: 2,itemTitle: "سایر قطعات بدنه",goTo: "",subItems: null}
            ]
        },
        {
            id: 1,
            headerTitle: "موتور و اگزوز",
            goTo: "/search/موتور_و_اگزوز",
            items: [
                {id: 0,itemTitle: "سیستم خنک کننده",goTo: "",subItems: null},
                {id: 1,itemTitle: "قطعات موتوری",goTo: "",subItems: null},
                {id: 2,itemTitle: "سوخت رسانی و احتراق",goTo: "",subItems: null},
                {id: 3,itemTitle: "قطعات اگزوز",goTo: "",subItems: null},
                {id: 4,itemTitle: "سایر قطعات موتوری و اگزوز",goTo: "",subItems: null}
            ]
        },
        {id: 2,headerTitle: "برقی و الکتریکی",goTo: "",items: null},
        {id: 3,headerTitle: "رینگ و لاستیک",goTo: "",items: null},
        {id: 4,headerTitle: "روغن و فیلتر",goTo: "",items: null},
        {id: 5,headerTitle: "قطعات داخلی",goTo: "",items: null},
        {id: 6,headerTitle: "انتقال قدرت",goTo: "",items: null},
        {id: 7,headerTitle: "فرمان ، جلوبندی و ترمز",goTo: "",items: null},
        {id: 8,headerTitle: "لوازم جانبی و اسپرت",goTo: "",items: null},
        {id: 9,headerTitle: "بلبرینگ ماشین",goTo: "",items: null},
        {id: 10,headerTitle: "کاسه نمد ماشین",goTo: "",items: null},
        {id: 11,headerTitle: "اورینگ ماشین",goTo: "",items: null},
        {id: 12,headerTitle: "گردگیر ماشین",goTo: "",items: null},
        {id: 13,headerTitle: "لوله های ماشین",goTo: "",items: null},
        {id: 14,headerTitle: "تسمه ماشین",goTo: "",items: null},
        {id: 15,headerTitle: "شلنگ ماشین",goTo: "",items: null}
    ]
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.ABCD:
            return {
                ...state,
                counter: state.counter + 1
            };
        case Types.EFGH:
            return {
                ...state,
                counter: state.counter - 1
            };
        case Types.GET_ITEMS:
            return {
                ...state,
                loading: true,
            };
        case Types.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                mainPageCategoriesItems: action.data
            };
        case Types.SHOW_RESPONSIVE_HEADER_CATEGORIES_MODAL_HANDLER:
            return {
                ...state,
                showResponsiveHeaderCategoriesModal: true
            };
        case Types.CLOSE_RESPONSIVE_HEADER_CATEGORIES_MODAL_HANDLER:
            return {
                ...state,
                showResponsiveHeaderCategoriesModal: false
            };
        case Types.FETCH_PRODUCT_CATEGORIES:
            return {
                ...state,
                loading: true,
                // error: null
            };    
        case Types.FETCH_PRODUCT_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                menuData: action.payload
            };
        case Types.FETCH_PRODUCT_CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}