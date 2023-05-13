import React from 'react';
import CheckoutNavigation from '../../../Views/Checkout/CheckoutNavigation';
import {
    Wrapper,
    PaymentInfo
} from './styles';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import FinalPricesAndDiscount from '../../../Views/Checkout/FinalPricesAndDiscount';
import { useSelector } from 'react-redux';
import PaymentInfoForm from '../../../Views/Checkout/Forms/PaymentInfoForm';

const CheckoutPayment = () => {

    const {
        shoppingBag
    } = useSelector((state) => state.Checkout);

    return (
        <Wrapper>
            <CheckoutNavigation />

            <CustomContainer
                alignItems="flex-start"
            >
                <PaymentInfo
                    flexDirection="column"
                    alignItems="flex-end"
                >
                    <PaymentInfoForm />
                </PaymentInfo>

                <FinalPricesAndDiscount
                    numberOfItems={shoppingBag.length}
                    buttonTitle="پرداخت"
                    currentPage="payment"
                />
            </CustomContainer>
        </Wrapper>
    );
}

export default CheckoutPayment;