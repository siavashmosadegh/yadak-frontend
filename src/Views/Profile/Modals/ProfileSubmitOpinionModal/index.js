import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import OrdersActions from '../../../../Redux/Orders/Actions';

const ProfileSubmitOpinionModal = () => {

    const dispatch = useDispatch();

    return (
        <CustomModal
            width="600px"
            height="600px"
            closeCustomModalHandler={() => dispatch(OrdersActions.closeSubmitOpinionModalHandler({}))}
            headerTitle="دیدگاه شما"
            modalBackgroundColor="#FFFFFF"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                Siavash
            </Wrapper>
        </CustomModal>
    );
}

export default ProfileSubmitOpinionModal;