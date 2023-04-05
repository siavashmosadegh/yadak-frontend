import Types from './Types';

const initState = {
    onGoingOrders: [
        {id: 0,title: "sefaresh"},
        {id: 1,title: "sefaresh"}
    ],
    successfulOrders: [
        {id: 0,title: "sefaresh"},
        {id: 1,title: "sefaresh"}
    ],
    returnedOrders: [

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