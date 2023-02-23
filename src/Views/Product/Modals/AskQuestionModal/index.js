import React from 'react';
import { Modal } from '@mui/material';
import { Wrapper } from './styles';
import MultiplyIcon from '../../../../Icons/ProductIcons/MultiplyIcon';
import { useDispatch } from 'react-redux';
import ProductActions from '../../../../Redux/Product/Actions';
import AskQuestionForm from '../../Forms/AskQuestionForm';

const AskQuestionModal = () => {

    const dispatch = useDispatch();

    const closeAskQuestionModal = () => {
        dispatch(ProductActions.closeAskQuestionModalHandler({}));
    }

    return (
        <Modal
            open={true}
            sx={{display: "flex",alignItems: "center",justifyContent: "center"}}
        >
            <Wrapper>
                <div className="header">
                    <span>پرسش خود را درباره این کالا ثبت کنید</span>

                    <span
                        onClick={closeAskQuestionModal}
                    >
                        <MultiplyIcon />
                    </span>
                </div>

                <AskQuestionForm />

                <p>ثبت پرسش به معنی موافقت با قوانین انتشار سیاوش یدک است</p>
            </Wrapper>
        </Modal>
    );
}

export default AskQuestionModal;