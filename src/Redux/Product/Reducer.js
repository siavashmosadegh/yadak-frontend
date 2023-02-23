import Types from "./Types";

const initState = {
    showAskQuestionModal: false,
    showAnswerQuestionModal: false,
    selectedQuestion: null
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case Types.SHOW_ASK_QUESTION_MODAL:
            return {
                ...state,
                showAskQuestionModal: true
            };
        case Types.CLOSE_ASK_QUESTION_MODAL:
            return {
                ...state,
                showAskQuestionModal: false
            };
        case Types.SHOW_ANSWER_QUESTION_MODAL:
            return {
                ...state,
                showAnswerQuestionModal: true,
                selectedQuestion: action.data
            };
        case Types.CLOSE_ANSWER_QUESTION_MODAL:
            return {
                ...state,
                showAnswerQuestionModal: false
            };
        default:
            return state;
    }   
}