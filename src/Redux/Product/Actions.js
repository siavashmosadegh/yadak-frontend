import Types from "./Types";
import DelegateAction from "../ActionDelegator";

export const getProductDetailsByProductID = (productID) => ({
    type: Types.GET_PRODUCT_DETAILS_BY_PRODUCT_ID,
    payload: { productID }, // Make sure payload has `category`
});

export const getSelectedProductFeatures = (productID) => ({
    type: Types.GET_SELECTED_PRODUCT_FEATURES,
    payload: { productID }
});

const ProductActions = {
    showAskQuestionModalHandler: DelegateAction(Types.SHOW_ASK_QUESTION_MODAL),
    closeAskQuestionModalHandler: DelegateAction(Types.CLOSE_ASK_QUESTION_MODAL),

    showAnswerQuestionModalHandler: DelegateAction(Types.SHOW_ANSWER_QUESTION_MODAL),
    closeAnswerQuestionModalHandler: DelegateAction(Types.CLOSE_ANSWER_QUESTION_MODAL),

    selectProductHandler: DelegateAction(Types.SELECT_PRODUCT)
}

export default ProductActions;