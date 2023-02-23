import React from 'react';
import { Modal } from '@mui/material';
import { Wrapper } from './styles';
import MultiplyIcon from '../../../../Icons/ProductIcons/MultiplyIcon';
import { useDispatch } from 'react-redux';
import ProductActions from '../../../../Redux/Product/Actions';
import AnswerQuestionForm from '../../Forms/AnswerQuestionForm';
import { useSelector } from 'react-redux';

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
        <Modal
            open={true}
            sx={{display: "flex",alignItems: "center",justifyContent: "center"}}
        >
            <Wrapper>
                <div className="header">
                    <span>به این پرسش پاسخ دهید</span>

                    <span
                        onClick={closeAnswerQuestionModal}
                    >
                        <MultiplyIcon />
                    </span>
                </div>

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
        </Modal>
    );
}

export default AnswerQuestionModal;