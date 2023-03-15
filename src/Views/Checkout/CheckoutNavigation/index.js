import React from 'react';
import Logo from '../../Main/Header/Logo';
import {
    CheckoutNavigationWrapper,
    NavigationItemsContainer
} from './styles';
import { useSelector } from 'react-redux';
import TitleAndIcon from '../../TitleAndIcon';

const CheckoutNavigation = () => {

    const {
        navigationItems
    } = useSelector((state) => state.Checkout);

    const navigationItemsContent = () => {
        return (
            navigationItems.map((item) => {
                return (
                    <TitleAndIcon
                        title={item.title}
                        icon={item.icon}
                        goTo={item.goTo}
                        fill={item.fill}
                    />
                );
            })
        );
    }

    return (
        <CheckoutNavigationWrapper>
            <Logo />

            <NavigationItemsContainer>
                {navigationItemsContent()}
            </NavigationItemsContainer>
        </CheckoutNavigationWrapper>
    );
}

export default CheckoutNavigation;