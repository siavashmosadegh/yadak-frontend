import React from 'react';
import CheckoutNavigation from '../../../Views/Checkout/CheckoutNavigation';
import { Wrapper } from './styles';
import FinalPricesAndDiscount from '../../../Views/Checkout/FinalPricesAndDiscount/index';
import Address from '../../../Views/Checkout/Address';
import { useSelector } from 'react-redux';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

const CheckoutShipping = () => {

    const {
        shoppingBag
    } = useSelector((state) => state.Checkout);

    return (
        <Wrapper>
            <CheckoutNavigation />

            <CustomContainer>
                <Address />

                <FinalPricesAndDiscount
                    numberOfItems={shoppingBag.length}
                />
            </CustomContainer>
        </Wrapper>
    );
}

export default CheckoutShipping;