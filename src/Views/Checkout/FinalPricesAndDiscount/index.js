import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../../UI-Kit/CustomButton';
import {
    Item,
    Wrapper
} from './styles';
import routePaths from '../../../Routes/NameSpace';
import CheckoutActions from '../../../Redux/Checkout/Actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const FinalPricesAndDiscount = (props) => {

    const dispatch = useDispatch();

    const {
        numberOfItems,
        selectedDate,
        buttonTitle,
        currentPage,
        disabled
    } = props;

    function continueButtonOnClickHandler () {
        if (selectedDate === null || selectedDate === undefined) {
        } else {
            console.log(selectedDate);
            dispatch(CheckoutActions.showConfirmSelectTimeAddressModalHandler({}));
        }
    }

    useEffect(() => {
        dispatch(CheckoutActions.closeConfirmSelectTimeAddressModalHandler({}));
    },[]);

    const linkHandler = () => {
        switch (currentPage) {
            case 'cart':
                return routePaths.checkoutShipping;
            case 'shipping':
                return '#';
            case 'payment':
                return routePaths.pardakht;
            default:
                return null;
        }
    }

    return (
        <Wrapper>
            <Item color="gray">
                <p>
                    ۲۲ تومان
                </p>

                <p>قیمت کالا ها ({numberOfItems})</p>
            </Item>

            <Item color="black">
                <p>
                    18
                </p>

                <p>جمع سبد خرید</p>
            </Item>

            <Item color="red">
                <p>
                    123
                </p>

                <p>سود شما از خرید</p>
            </Item>

            <Link
                to={linkHandler()}
            >
                <div className="buttonContainer">
                    <CustomButton
                        width="100%"
                        height="40px"
                        title={buttonTitle}
                        backgroundColor="red"
                        borderRadius="10px"
                        border="none"
                        color="white"
                        fontSize="18px"
                        fontWeight="bold"
                        onClick={continueButtonOnClickHandler}
                        disabled={disabled}
                    />
                </div>
            </Link>
        </Wrapper>
    );
}

export default FinalPricesAndDiscount;