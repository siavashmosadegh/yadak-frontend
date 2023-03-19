import React, { useState } from 'react';
import CheckoutNavigation from '../../../Views/Checkout/CheckoutNavigation';
import {
    Wrapper,
    SelectDeliveryInfo,
    Line
} from './styles';
import FinalPricesAndDiscount from '../../../Views/Checkout/FinalPricesAndDiscount/index';
import Address from '../../../Views/Checkout/Address';
import { useSelector } from 'react-redux';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import ChangeEditAddressModal from '../../../Views/Checkout/Modals/ChangeEditAddressModal';
import PersianDatePicker from '@skhazaei/persian-date-picker';
import moment from 'jalali-moment';
import SelectDeliveryTime from '../../../Views/Checkout/SelectDeliveryTime';

const CheckoutShipping = () => {

    const {
        shoppingBag,
        showChangeEditAddressModal
    } = useSelector((state) => state.Checkout);

    const [selectedDate, setSelectedDate] = useState(null);
    
    console.log(selectedDate);

    return (
        <Wrapper>
            <CheckoutNavigation />

            <CustomContainer
                alignItems="flex-start"
            >
                <SelectDeliveryInfo
                    flexDirection="column"
                    alignItems="flex-end"
                >
                    <Address />

                    {/* <Line /> */}

                    <SelectDeliveryTime />
                </SelectDeliveryInfo>

                <FinalPricesAndDiscount
                    numberOfItems={shoppingBag.length}
                />
            </CustomContainer>

            {
                showChangeEditAddressModal === true
                    ?
                    <ChangeEditAddressModal />
                    :
                    null
            }
        </Wrapper>
    );
}

export default CheckoutShipping;

            {/* <SelectDeliveryTime
                disableMediaQuery={true}
                flexDirection="column"
                alignItems="flex-end"
            >
                <PersianDatePicker
                    input={false}
                    onSelectDay={(date) => setSelectedDate(date)}
                    // onSelectDay={(date) => console.log(moment(date, 'MMMM').locale('fa').format('MMMM'))}
                    // minDate={Date.now()}
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
                    moment(selectedDate,'DD').locale('fa').format('DD')
                    // moment(Date.now(),'MMMM').locale('fa').format('MMMM')
                    // Date.now()
                    :
                    null                    
                }
            </SelectDeliveryTime> */}