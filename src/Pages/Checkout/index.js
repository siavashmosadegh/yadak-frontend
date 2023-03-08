import React, { useEffect } from 'react';
import Layout from '../../Views/Layout';
import { useSelector } from 'react-redux';
import { CheckoutWrapper, EmptyShoppingBagContainer, ShoppingBagIconContainer } from './styles';
import ShoppingBagIcon from '../../Icons/Checkout/ShoppingBagIcon';
import LoginToAccount from '../../Views/Checkout/LoginToAccount';

const Checkout = () => {

    const {
        shoppingBag
    } = useSelector((state) => state.Checkout);

    const {
        isLoggedIn
    } = useSelector((state) => state.Auth);

    console.log(shoppingBag.length);

    // useEffect(() => {
    //     if ( (isLoggedIn === false) && (shoppingBag.length !== 0) ) {

    //     }
    // },[isLoggedIn, shoppingBag.length])

    const checkoutContent = () => {
        if (shoppingBag.length == 0) {
            return (
                <>
                    <LoginToAccount />
                    <EmptyShoppingBagContainer>
                        <ShoppingBagIconContainer>
                            <ShoppingBagIcon />
                        </ShoppingBagIconContainer>

                        <h3>سبد خرید شما خالی است!</h3>
                    </EmptyShoppingBagContainer>               
                </>
            );
        }
    }

    return (
        <Layout>
            <CheckoutWrapper>
                {checkoutContent()}            
            </CheckoutWrapper>
        </Layout>
    );
}

export default Checkout;