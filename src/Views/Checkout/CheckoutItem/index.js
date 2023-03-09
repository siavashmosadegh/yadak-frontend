import React from 'react';
import {
    LeftDiv,
    RightDiv,
    Wrapper
} from './styles';
import img1 from '../../../Assets/images/1.jpg';
import NumberOfItemsRequested from './NumberOfItemsRequested';

const CheckoutItem = (props) => {

    const {
        item
    } = props;
    
    return (
        <Wrapper>
            <LeftDiv>
                siavash
            </LeftDiv>
            <RightDiv>
                <img src={img1} />

                <NumberOfItemsRequested
                    number={2}
                />
            </RightDiv>
        </Wrapper>
    );
}

export default CheckoutItem;