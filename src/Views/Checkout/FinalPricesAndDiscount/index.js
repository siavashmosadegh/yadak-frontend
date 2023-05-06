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

const FinalPricesAndDiscount = (props) => {

    const dispatch = useDispatch();

    const {
        numberOfItems
    } = props;

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

            <Link to={routePaths.checkoutShipping}>
                <CustomButton
                    width="100%"
                    height="40px"
                    title="ادامه"
                    backgroundColor="red"
                    borderRadius="10px"
                    border="none"
                    color="white"
                    fontSize="18px"
                    fontWeight="bold"
                    onClick={() => dispatch(CheckoutActions.showConfirmSelectTimeModalHandler({}))}
                />            
            </Link>
        </Wrapper>
    );
}

export default FinalPricesAndDiscount;