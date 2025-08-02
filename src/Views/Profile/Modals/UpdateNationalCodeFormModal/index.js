import CustomModal from '../../../../UI-Kit/CustomModal';
import SubmitNationalCodeForm from '../../Forms/SubmitNationalCodeForm';
import { Wrapper } from './styles';

const UpdateNationalCodeFormModal = (props) => {
    return (
        <CustomModal
            width="400px"
            height="450px"
            closeCustomModalHandler={() => props.closeModal()}
            headerTitle="بروز رسانی کد ملی"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="600px"
        >
            <Wrapper>
                <SubmitNationalCodeForm />
            </Wrapper>
        </CustomModal>
    );
}

export default UpdateNationalCodeFormModal;