import React from 'react';
import { Link } from 'react-router-dom';
import OnlinePaymentIcon from '../../Icons/Checkout/OnlinePaymentIcon';
import ShoppingBagIconTwo from '../../Icons/Checkout/ShoppingBagIconTwo';
import TruckTransportIcon from '../../Icons/Checkout/TruckTransportIcon';
import {
    IconContainer,
    TitleAndIconWrapper,
    TitleContainer
} from './styles';

const TitleAndIcon = (props) => {

    const {
        title,
        icon,
        goTo,
        fill
    } = props;

    const iconCreator = () => {
        switch (icon) {
            case 'ShoppingBagIconTwo':
                return <ShoppingBagIconTwo />;
            case 'TruckTransportIcon':
                return <TruckTransportIcon />;
            case 'OnlinePaymentIcon':
                return <OnlinePaymentIcon />;
            default:
                return null;
        }
    }

    console.log(iconCreator);

    return (
        <TitleAndIconWrapper>
            <Link
                to={goTo}
            >
                <IconContainer
                    fill={fill}
                >
                    {iconCreator()}
                </IconContainer>

                <TitleContainer>
                    {title}
                </TitleContainer>
            </Link>
        </TitleAndIconWrapper>
    );
}

export default TitleAndIcon;