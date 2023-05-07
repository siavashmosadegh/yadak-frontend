import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import { useDispatch } from 'react-redux';
import CheckoutActions from '../../../../Redux/Checkout/Actions';
import { Wrapper } from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import CustomButton from '../../../../UI-Kit/CustomButton';

const ConfirmSelectTimeAddressModal = (props) => {

    const dispatch = useDispatch();

    const {
        selectedDate
    } = props;

    return (
        <CustomModal
            width="400px"
            height="400px"
            closeCustomModalHandler={() => dispatch(CheckoutActions.closeConfirmSelectTimeAddressModalHandler({}))}
            headerTitle="تایید زمان ارسال"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                <p className="title">آیا زمان زیر را تایید میکنید ؟</p>

                {
                    selectedDate !== null
                        ?
                        selectedDate.year
                        :
                        null
                }

                <CustomContainer
                    disableMediaQuery={true}
                >
                    <CustomButton
                        width="30%"
                        height="50px"
                        title="تایید"
                        backgroundColor="red"
                        borderRadius="10px"
                        border="none"
                        color="white"
                        fontSize="20px"
                        fontWeight="bold"
                    >
                    </CustomButton>

                    <CustomButton
                        width="30%"
                        height="50px"
                        title="رد"
                        backgroundColor="red"
                        borderRadius="10px"
                        border="none"
                        color="white"
                        fontSize="20px"
                        fontWeight="bold"
                        onClick={() => dispatch(CheckoutActions.closeConfirmSelectTimeAddressModalHandler({}))}
                    >
                    </CustomButton>
                </CustomContainer>
            </Wrapper>
        </CustomModal>
    );
}

export default ConfirmSelectTimeAddressModal;

{/* {
selectedDate !== null
    ?
    moment(selectedDate,'MMMM').locale('fa').format('MMMM')
    :
    null
}

{
    selectedDate !== null
    ?
    getNameOfTheDay(selectedDate.getDay())
    :
    null                    
} */}