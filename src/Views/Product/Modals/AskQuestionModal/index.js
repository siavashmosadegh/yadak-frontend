import React from 'react';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import ProductActions from '../../../../Redux/Product/Actions';
import AskQuestionForm from '../../Forms/AskQuestionForm';
import CustomModal from '../../../../UI-Kit/CustomModal';

const AskQuestionModal = () => {

    const dispatch = useDispatch();

    const closeAskQuestionModal = () => {
        dispatch(ProductActions.closeAskQuestionModalHandler({}));
    }

    return (
        <CustomModal
            width="400px"
            height="400px"
            closeCustomModalHandler={closeAskQuestionModal}
            headerTitle="پرسش خود را درباره این کالا ثبت کنید"
            modalBackgroundColor="#FFFFFF"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                <AskQuestionForm />
                <p>ثبت پرسش به معنی موافقت با قوانین انتشار سیاوش یدک است</p>
            </Wrapper>
        </CustomModal>
    );
}
    
export default AskQuestionModal;