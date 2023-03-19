import React, {useState} from 'react';
import { ClockIconContainer, Wrapper } from './styles';
import PersianDatePicker from '@skhazaei/persian-date-picker';
import moment from 'jalali-moment';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import ClockIcon from '../../../Icons/Checkout/ClockIcon';

const SelectDeliveryTime = () => {

    const [selectedDate, setSelectedDate] = useState(null);

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
                onSelectDay={(date) => setSelectedDate(date)}
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

            {
                selectedDate !== null
                ?
                // null// moment(selectedDate,'MMMM').locale('fa').format('MMMM')
                // moment(selectedDate,'DD').locale('fa').format('DD')
                // moment(Date.now(),'MMMM').locale('fa').format('MMMM')
                getNameOfTheDay(selectedDate.getDay())
                :
                null                    
            }
        </Wrapper>
    );
}

export default SelectDeliveryTime;