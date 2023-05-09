import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OnlinePaymentIcon from '../../Icons/Checkout/OnlinePaymentIcon';
import ShoppingBagIconTwo from '../../Icons/Checkout/ShoppingBagIconTwo';
import TruckTransportIcon from '../../Icons/Checkout/TruckTransportIcon';
import {
    IconContainer,
    Line,
    TitleAndIconWrapper,
    TitleContainer
} from './styles';

const TitleAndIcon = (props) => {

    const {
        title,
        icon,
        goTo,
        fill,
        location
    } = props;

    const [active, setActive] = useState(false);

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

    useEffect(() => {
        if (location === goTo) {
            setActive(true);
        } else {
            setActive(false);
        }
    },[location]);

    return (
        <TitleAndIconWrapper
            justifyContent="center"
            disableMediaQuery={true}
        >
            <Link
                to={goTo}
            >
                <IconContainer
                    fill={fill}
                    active={active}
                >
                    {iconCreator()}
                </IconContainer>

                <TitleContainer
                    active={active}
                >
                    {title}
                </TitleContainer>
            </Link>

            {
                icon !== 'OnlinePaymentIcon'
                    ?
                    <Line />
                    :
                    null
            }
        </TitleAndIconWrapper>
    );
}

export default TitleAndIcon;