import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutNavigation from '../../../Views/Checkout/CheckoutNavigation';
import { Wrapper } from './styles';
import routePaths from '../../../Routes/NameSpace';

const CheckoutShipping = () => {
    return (
        <Wrapper>
            <CheckoutNavigation />

            <Link to={routePaths.checkoutPayment}>
                <button>
                    click me !
                </button>            
            </Link>
        </Wrapper>
    );
}

export default CheckoutShipping;