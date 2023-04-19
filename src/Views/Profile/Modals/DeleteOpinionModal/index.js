import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import OrdersActions from '../../../../Redux/Orders/Actions';
import { useDispatch } from 'react-redux';
import { StyledButton, Wrapper } from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import CustomButton from '../../../../UI-Kit/CustomButton';

const DeleteOpinionModal = () => {

    const dispatch = useDispatch();

    return (
        <CustomModal
            width="400px"
            height="250px"
            closeCustomModalHandler={() => dispatch(OrdersActions.closeDeleteOpinionModalHandler({}))}
            headerTitle="حذف نظر"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                <p>آیا این نظر حذف شود ؟</p>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="flex-end"
                >
                    <StyledButton
                        width="60px"
                        height="35px"
                        title="انصراف"
                        backgroundColor="white"
                        borderRadius="5px"
                        border="1px solid red"
                        color="red"
                        fontSize="13px"
                        fontWeight="bold"
                        onClick={() => dispatch(OrdersActions.closeDeleteOpinionModalHandler({}))}
                    />

                    <CustomButton
                        width="60px"
                        height="35px"
                        title="حذف"
                        backgroundColor="red"
                        borderRadius="5px"
                        border="none"
                        color="white"
                        fontSize="13px"
                        fontWeight="bold"
                        onClick=""
                        className="deleteButton"
                    />
                </CustomContainer>
            </Wrapper>
        </CustomModal>
    );
}

export default DeleteOpinionModal;