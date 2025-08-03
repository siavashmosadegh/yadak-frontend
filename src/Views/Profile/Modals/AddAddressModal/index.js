import CustomModal from '../../../../UI-Kit/CustomModal';
import AddAddressModalForm from '../../Forms/AddAddressModalForm';
import { Wrapper } from './styles';

const AddAddressModal = (props) => {

    return (
        <CustomModal
            width="400px"
            height="450px"
            closeCustomModalHandler={props.onClose}
            headerTitle="افزودن آدرس"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="600px"
        >
            <Wrapper>
                <AddAddressModalForm />
            </Wrapper>
        </CustomModal>
    );
}

export default AddAddressModal;