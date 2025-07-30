import CustomModal from '../../../../UI-Kit/CustomModal';
import SubmitFirstnameAndLastnameForm from '../../Forms/SubmitFirstnameAndLastnameForm';
import { Wrapper } from './styles';

const UpdateNameFormModal = (props) => {

    return (
        <CustomModal
            width="400px"
            height="450px"
            closeCustomModalHandler={() => props.closeModal()}
            headerTitle="بروز رسانی اسم"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="600px"
        >
            <Wrapper>
                <SubmitFirstnameAndLastnameForm />
            </Wrapper>
        </CustomModal>
    );
}

export default UpdateNameFormModal;