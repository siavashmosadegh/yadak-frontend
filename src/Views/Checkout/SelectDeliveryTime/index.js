import React, {useEffect, useState} from 'react';
import { ClockIconContainer, DatePickerContainer, TitleAndIconContainer, Wrapper } from './styles';
import moment from 'jalali-moment';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import ClockIcon from '../../../Icons/Checkout/ClockIcon';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmSelectTimeModal from '../Modals/ConfirmSelectTimeModal';
import CheckoutActions from '../../../Redux/Checkout/Actions';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

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

    useEffect(() => {
        // dispatch(CheckoutActions.showConfirmSelectTimeModalHandler({}));
    },[selectedDate]);

    return (
        <Wrapper>
            <TitleAndIconContainer
                disableMediaQuery={true}
                justifyContent="flex-start"
            >
                <ClockIconContainer>
                    <ClockIcon />
                </ClockIconContainer>

                <p>انتخاب زمان ارسال</p>
            </TitleAndIconContainer>


            <DatePickerContainer
                disableMediaQuery={true}
                justifyContent="flex-start"
            >
                <DatePicker
                    value={selectedDate}
                    onChange={setSelectedDate}
                    calendar={persian}
                    locale={persian_fa}
                    minDate={Date.now()}
                />
            </DatePickerContainer>

            {/* /* <PersianDatePicker
                input={false}
                onSelectDay={(date) => selectedDateHandler(date)}
            /> /* */}

            {
                selectedDate !== null
                    ?
                    // null// moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                    // moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                    selectedDate.month.name
                    // moment(Date.now(),'MMMM').locale('fa').format('MMMM')
                    // Date.now()
                    :
                    null
            }

            {/*}

            {
                selectedDate !== null
                ?
                null// moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                moment(selectedDate,'DD').locale('fa').format('DD')
                moment(Date.now(),'MMMM').locale('fa').format('MMMM')
                getNameOfTheDay(selectedDate.getDay())
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