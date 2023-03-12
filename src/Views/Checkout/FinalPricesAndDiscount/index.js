import React from 'react';
import CustomButton from '../../../UI-Kit/CustomButton';
import {
    Button,
    Item,
    Wrapper
} from './styles';

const FinalPricesAndDiscount = (props) => {

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
            />
        </Wrapper>
    );
}

export default FinalPricesAndDiscount;