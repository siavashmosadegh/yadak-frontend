import CustomModal from '../../../../UI-Kit/CustomModal';
import { Wrapper } from './styles';

const UpdateNameFormModal = () => {

    return (
        <CustomModal
            width="400px"
            height="250px"
            //closeCustomModalHandler={() => dispatch(OrdersActions.closeDeleteOpinionModalHandler({}))}
            // headerTitle="حذف نظر"
            modalBackgroundColor="white"
            headerHeight="50px"
            // mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                فرم ابدیت اسم ها
            </Wrapper>
        </CustomModal>
    );
}

export default UpdateNameFormModal;