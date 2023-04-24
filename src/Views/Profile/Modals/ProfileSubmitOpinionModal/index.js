import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import OrdersActions from '../../../../Redux/Orders/Actions';
import ProfileSubmitOpinionForm from '../../Forms/ProfileSubmitOpinionForm';

const ProfileSubmitOpinionModal = (props) => {

    const {
        type
    } = props;

    const dispatch = useDispatch();

    return (
        <CustomModal
            width="600px"
            height="600px"
            closeCustomModalHandler={
                type === "submit"
                    ?
                    () => dispatch(OrdersActions.closeSubmitOpinionModalHandler({}))
                    :
                    () => dispatch(OrdersActions.closeEditOpinionModalHandler({}))
            }
            headerTitle="دیدگاه شما"
            modalBackgroundColor="#FFFFFF"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper
                flexDirection="column"
            >
                <ProfileSubmitOpinionForm />
            </Wrapper>
        </CustomModal>
    );
}

export default ProfileSubmitOpinionModal;