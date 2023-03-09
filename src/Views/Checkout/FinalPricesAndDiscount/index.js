import React from 'react';
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

            <Button>
                ادامه
            </Button>
        </Wrapper>
    );
}

export default FinalPricesAndDiscount;