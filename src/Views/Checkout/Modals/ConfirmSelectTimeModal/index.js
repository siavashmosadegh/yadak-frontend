import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import { useDispatch } from 'react-redux';
import CheckoutActions from '../../../../Redux/Checkout/Actions';
import { Wrapper } from './styles';
import moment from 'jalali-moment';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import CustomButton from '../../../../UI-Kit/CustomButton';

const ConfirmSelectTimeModal = (props) => {

    const dispatch = useDispatch();

    const {
        selectedDate
    } = props;

    const getNameOfTheDay = (day) => {
        switch (day) {
            case 0:
                return "شنبه";
            case 1:
                return "یکشنبه";
            case 2:
                return "دوشنبه";
            case 3:
                return "سه شنبه";
            case 4:
                return "چهارشنبه";
            case 5:
                return "پنج شنبه";
            case 6:
                return "جمعه";
        }
    }

    return (
        <CustomModal
            width="400px"
            height="400px"
            closeCustomModalHandler={() => dispatch(CheckoutActions.closeConfirmSelectTimeModalHandler({}))}
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
                }

                <CustomContainer
                    disableMediaQuery={true}
                >
                    <CustomButton
                        width="30%"
                        height="50px"
                        title="تایید"
                        backgroundColor=""
                        borderRadius=""
                        border=""
                        color=""
                        fontSize=""
                        fontWeight=""
                        onClick=""
                        type
                    >
                    </CustomButton>

                    <CustomButton
                        width="30%"
                        height="50px"
                        title="رد"
                        backgroundColor=""
                        borderRadius=""
                        border=""
                        color=""
                        fontSize=""
                        fontWeight=""
                        onClick=""
                        type
                    >
                    </CustomButton>
                </CustomContainer>
            </Wrapper>
        </CustomModal>
    );
}

export default ConfirmSelectTimeModal;