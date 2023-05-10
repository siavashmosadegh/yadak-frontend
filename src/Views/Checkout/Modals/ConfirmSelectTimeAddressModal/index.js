import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutActions from '../../../../Redux/Checkout/Actions';
import { Wrapper } from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import CustomButton from '../../../../UI-Kit/CustomButton';
import ConvertToPersianDigit from '../../../../Util/ConvertToPersianDigit';
import { Link } from 'react-router-dom';
import routePaths from '../../../../Routes/NameSpace';

const ConfirmSelectTimeAddressModal = (props) => {

    const dispatch = useDispatch();

    const {
        selectedDate
    } = props;

    const {
        selectedAddress
    } = useSelector((state) => state.User);

    return (
        <CustomModal
            width="400px"
            height="400px"
            closeCustomModalHandler={() => dispatch(CheckoutActions.closeConfirmSelectTimeAddressModalHandler({}))}
            headerTitle="تایید زمان و مقصد ارسال"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                <p className="title">آیا زمان و مقصد را تایید میکنید ؟</p>

                <div className='time'>
                    {
                        selectedDate !== null
                        ?
                        <CustomContainer
                            disableMediaQuery={true}
                            justifyContent="flex-start"
                        >
                            <span>
                                {
                                    ConvertToPersianDigit(selectedDate.day)
                                }
                            </span>

                            <span>
                                {
                                    selectedDate.month.name
                                }
                            </span>

                            <span>
                                {
                                    ConvertToPersianDigit(selectedDate.year)
                                }
                            </span>
                        </CustomContainer>
                        :
                        null
                    }
                </div>

                <div className='location'>
                    {
                        selectedAddress !== null
                            ?
                            <p>
                                {selectedAddress.title}
                            </p>
                            :
                            null
                    }
                </div>

                <CustomContainer
                    disableMediaQuery={true}
                >
                    <Link
                        to={routePaths.checkoutPayment}
                    >
                        <CustomButton
                            width="100%"
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
                    </Link>

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