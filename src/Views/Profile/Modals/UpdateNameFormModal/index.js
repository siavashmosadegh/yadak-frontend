import CustomModal from '../../../../UI-Kit/CustomModal';
import { Wrapper } from './styles';

const UpdateNameFormModal = (props) => {

    return (
        <CustomModal
            width="400px"
            height="250px"
            closeCustomModalHandler={() => props.closeModal()}
            headerTitle="بروز رسانی اسم"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="600px"
        >
            <Wrapper>
                فرم ابدیت اسم ها
            </Wrapper>
        </CustomModal>
    );
}

export default UpdateNameFormModal;