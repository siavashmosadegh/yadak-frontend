import React from 'react';
import { Wrapper } from './styles';

const PriceComponent = (props) => {

    const {
        price,
        width,
        height,
        tomanColor,
        tomanFontSize,
        priceColor,
        priceFontSize
    } = props;

    return (
        <Wrapper
            width={width}
            height={height}
            tomanColor={tomanColor}
            tomanFontSize={tomanFontSize}
            priceColor={priceColor}
            priceFontSize={priceFontSize}
        >
            <span className="toman">تومان</span>

            <span className="price">{price.toLocaleString()}</span>
        </Wrapper>
    );
}

PriceComponent.defaultProps = {
    width: "auto",
    height: "auto"
}

export default PriceComponent;