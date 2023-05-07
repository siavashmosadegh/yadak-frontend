import React from 'react';
import {
    LeftDiv,
    RightDiv,
    Wrapper
} from './styles';
import img1 from '../../../Assets/images/1.jpg';
import NumberOfItemsRequested from './NumberOfItemsRequested';
import VerifiedIcon from '../../../Icons/ProductIcons/VerifiedIcon';
import PriceComponent from '../../PriceComponent';

const CheckoutItem = (props) => {

    const {
        item,
        type
    } = props;

    return (
        <Wrapper
            type={type}
        >
            <div className="row">
                <LeftDiv>
                    <p className="title">{item.title}</p>

                    <div className="verified">
                        <VerifiedIcon />

                        <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                    </div>
                </LeftDiv>
                <RightDiv>
                    <img src={img1} />
                </RightDiv>
            </div>
            <div className="row">
                <LeftDiv>
                    <PriceComponent
                        price={item.price}
                        width="auto"
                        height="auto"
                        tomanColor="#000000"
                        tomanFontSize="15px"
                        priceColor="#000000"
                        priceFontSize="15px"
                    />
                </LeftDiv>
                <RightDiv>
                    {
                        type === "inCheckout"
                            ?
                            <NumberOfItemsRequested
                                number={2}
                            />
                            :
                            null
                    }
                </RightDiv>
            </div>
        </Wrapper>
    );
}

CheckoutItem.defaultProps = {
    type: "inCheckout"
}

export default CheckoutItem;