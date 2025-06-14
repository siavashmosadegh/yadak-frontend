import React, { useEffect } from 'react';
import Layout from '../../../Views/Layout';
import { useSelector , useDispatch } from 'react-redux';
import {
    CheckoutWrapper,
    EmptyShoppingBagContainer,
    ShoppingBagIconContainer
} from './styles';
import ShoppingBagIcon from '../../../Icons/Checkout/ShoppingBagIcon';
import LoginToAccount from '../../../Views/Checkout/LoginToAccount';
import FinalPricesAndDiscount from '../../../Views/Checkout/FinalPricesAndDiscount';
import LoadedShoppingBag from '../../../Views/Checkout/LoadedShoppingBag';
import { getCartViaUserId } from '../../../Redux/Checkout/Actions';

const CheckoutCart = () => {

    const dispatch = useDispatch();

    const {
        shoppingBag,
        shoppingBagId
    } = useSelector((state) => state.Checkout);

    const {
        isLoggedIn
    } = useSelector((state) => state.Auth);

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
                        <h1>cartId: {shoppingBagId}</h1>

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
                    buttonTitle="ثبت سفارش"
                    currentPage="cart"
                />
                <LoadedShoppingBag
                    items={shoppingBag}
                />
            </>
        );
    }

    useEffect(() => {
        dispatch(getCartViaUserId());
    },[]);

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

export default CheckoutCart;