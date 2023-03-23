import React, {useState} from 'react';
import { ClockIconContainer, Wrapper } from './styles';
import PersianDatePicker from '@skhazaei/persian-date-picker';
import moment from 'jalali-moment';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import ClockIcon from '../../../Icons/Checkout/ClockIcon';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmSelectTimeModal from '../Modals/ConfirmSelectTimeModal';
import CheckoutActions from '../../../Redux/Checkout/Actions';

const SelectDeliveryTime = () => {

    const dispatch = useDispatch();

    const [selectedDate, setSelectedDate] = useState(null);

    const {
        showConfirmSelectTimeModal
    } = useSelector((state) => state.Checkout);

    const selectedDateHandler = (date) => {
        setSelectedDate(date);
        dispatch(CheckoutActions.showConfirmSelectTimeModalHandler({}));
    }

    return (
        <Wrapper>
            <CustomContainer
                disableMediaQuery={true}
                justifyContent="flex-start"
            >
                <ClockIconContainer>
                    <ClockIcon />
                </ClockIconContainer>

                <p>انتخاب زمان ارسال</p>
            </CustomContainer>

            <PersianDatePicker
                input={false}
                onSelectDay={(date) => selectedDateHandler(date)}
            />

            {
                selectedDate !== null
                    ?
                    // null// moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                    moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                    // moment(Date.now(),'MMMM').locale('fa').format('MMMM')
                    // Date.now()
                    :
                    null
            }

            {/* {
                selectedDate !== null
                ?
                // null// moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                // moment(selectedDate,'DD').locale('fa').format('DD')
                // moment(Date.now(),'MMMM').locale('fa').format('MMMM')
                // getNameOfTheDay(selectedDate.getDay())
                :
                null                    
            } */}

            {
                showConfirmSelectTimeModal === true
                    ?
                    <ConfirmSelectTimeModal
                        selectedDate={selectedDate}
                    />
                    :
                    null
            }
        </Wrapper>
    );
}

export default SelectDeliveryTime;