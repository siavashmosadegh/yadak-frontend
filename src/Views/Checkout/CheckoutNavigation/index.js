import React from 'react';
import Logo from '../../Main/Header/Logo';
import {
    CheckoutNavigationWrapper,
    NavigationItemsContainer
} from './styles';
import { useSelector } from 'react-redux';
import TitleAndIcon from '../../TitleAndIcon';
import { useLocation } from 'react-router-dom';

const CheckoutNavigation = () => {

    const location = useLocation();

    const {
        navigationItems
    } = useSelector((state) => state.Checkout);

    const navigationItemsContent = () => {
        return (
            navigationItems.map((item) => {
                return (
                    <TitleAndIcon
                        key={item.id}
                        location={location.pathname}
                        title={item.title}
                        icon={item.icon}
                        goTo={item.goTo}
                        fill={item.fill}
                        active={item.active}
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