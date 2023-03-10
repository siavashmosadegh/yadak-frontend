import React from 'react';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import ProductActions from '../../../../Redux/Product/Actions';
import AnswerQuestionForm from '../../Forms/AnswerQuestionForm';
import { useSelector } from 'react-redux';
import CustomModal from '../../../../UI-Kit/CustomModal';

const AnswerQuestionModal = () => {

    const dispatch = useDispatch();

    const closeAnswerQuestionModal = () => {
        dispatch(ProductActions.closeAnswerQuestionModalHandler({}));
    }

    const ProductState = useSelector((state) => state.Product);

    const {
        selectedQuestion
    } = ProductState;

    return (
        <CustomModal
            width="400px"
            height="400px"
            closeCustomModalHandler={closeAnswerQuestionModal}
            headerTitle="به این پرسش پاسخ دهید"
            modalBackgroundColor="#FFFFFF"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                <p>
                    {selectedQuestion !== null
                        ?
                        selectedQuestion.question
                        :
                        null
                    }
                </p>

                <p className="pasokh">پاسخ</p>

                <AnswerQuestionForm />

                <p className="law">ثبت پاسخ به معنی پذیرش قوانین سیاوش یدک است</p>
            </Wrapper>
        </CustomModal>
    );
}

export default AnswerQuestionModal;