import React, { useEffect } from 'react';
import Layout from '../../Views/Layout';
import { useSelector } from 'react-redux';
import {
    CheckoutWrapper,
    EmptyShoppingBagContainer,
    ShoppingBagIconContainer
} from './styles';
import ShoppingBagIcon from '../../Icons/Checkout/ShoppingBagIcon';
import LoginToAccount from '../../Views/Checkout/LoginToAccount';
// import CheckoutItem from '../../Views/Checkout/CheckoutItem';
import FinalPricesAndDiscount from '../../Views/Checkout/FinalPricesAndDiscount';
import LoadedShoppingBag from '../../Views/Checkout/LoadedShoppingBag';

const Checkout = () => {

    const {
        shoppingBag
    } = useSelector((state) => state.Checkout);

    const {
        isLoggedIn
    } = useSelector((state) => state.Auth);

    console.log(shoppingBag.length);

    useEffect(() => {
        if ( shoppingBag.length === 0 ) {

        } else {

        }
    },[shoppingBag.length]);

    const checkoutEmptyContent = () => {
        // if (shoppingBag.length == 0) {
            return (
                <>
                    {
                        isLoggedIn === false
                            ?
                            <LoginToAccount />
                            :
                            null
                    }
                    <EmptyShoppingBagContainer isLoggedIn={isLoggedIn}>
                        <ShoppingBagIconContainer>
                            <ShoppingBagIcon />
                        </ShoppingBagIconContainer>

                        <h3>سبد خرید شما خالی است!</h3>
                    </EmptyShoppingBagContainer>               
                </>
            );
        // }
    }

    const checkoutContent = () => {
        return (
            <>
                <FinalPricesAndDiscount
                    numberOfItems={shoppingBag.length}
                />
                <LoadedShoppingBag
                    items={shoppingBag}
                />
                {/* {shoppingBag.map( (item) => {
                    return (
                        <CheckoutItem 
                            item={item}
                        />
                    );
                })} */}
            </>
        );
    }

    return (
        <Layout>
            <CheckoutWrapper>
                {
                    shoppingBag.length == 0
                        ?
                        checkoutEmptyContent()
                        :
                        checkoutContent()
                }
                {/* {checkoutEmptyContent()}             */}
            </CheckoutWrapper>
        </Layout>
    );
}

export default Checkout;