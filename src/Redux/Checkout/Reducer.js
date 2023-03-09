import Types from './Types';

const initState = {
    shoppingBag: [
        {
            id: 1902374982374,
            title: "ساب ووفر خودرو پایونیر مدل تی اس دبلیو سیصدو دوازده دی چهارده",
            star: 4.3, // first section
            opinion: 92, // first section
            productLink: "/product/code-123",
            question: 170, // first section
            userSuggestPercent: "89%", // first section
            numberOfItemsAvailableInStore: 11,
            discount: null,
            userSuggestNumber: 50, // first section
            features: [
                {id: 0,title: "آمپرها",explanation: "بنزین"},
                {id: 1,title: "فضای حمل بار",explanation: "ندارد"},
                {id: 2,title: "نوع رادیاتور",explanation: "بدون رادیاتور"},
                {id: 3,title: "نوع چراغ",explanation: "لامپ رشته ای"}
            ],
            available: true,
            price: 171,
            questions: [
                // {
                //     id: 0,
                //     question: "سلام وقت بخیر توی دیوار پیچ میشه یا فقط همینجوری توی باکس قرار میگیره؟کناف تی وی تحمل وزنشو داره؟",
                //     answers: [
                //         {id: 0,answer: "درود بر شما که بهترین هستید هر دو را میتوانید انجام بدهید به شرطی که کناف شما راویز کاری شده باشد اصولی تر میشود ولی ادر کل تحمل میکنه و ما تو مغازه ها و نمایندگی هامون حتی پشت کارو یدونه برگ سوراخ میکنیم تا بتونیم مدلها رو تغیر بدیم هر ماه و شما اگه اینجا بودید میدیدید که هیچ پیچ و مهره ای در کار نیست ولی اصولی نمیشه"},
                //         {id: 1,answer: "درود بر شما که بهترین هستید هر دو را میتوانید انجام بدهید به شرطی که کناف شما راویز کاری شده باشد اصولی تر میشود ولی ادر کل تحمل میکنه و ما تو مغازه ها و نمایندگی هامون حتی پشت کارو یدونه برگ سوراخ میکنیم تا بتونیم مدلها رو تغیر بدیم هر ماه و شما اگه اینجا بودید میدیدید که هیچ پیچ و مهره ای در کار نیست ولی اصولی نمیشه"}
                //     ]
                // },
                // {id: 1,question: "سوال 1",answers: []},
                // {id: 2,question: "سوال 2",answers: []},
                // {id: 3,question: "سوال 3",answers: []},
                // {id: 4,question: "سوال 4",answers: []},
                // {id: 5,question: "سوال 5",answers: []},
                // {id: 6,question: "سوال 7",answers: []},
                // {id: 7,question: "سوال 8",answers: []}
            ]
        }
    ]
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.DELETE_EVERYTHING: 
            return {
                ...state,
                shoppingBag: []
            }
        default:
            return state;
    }
}