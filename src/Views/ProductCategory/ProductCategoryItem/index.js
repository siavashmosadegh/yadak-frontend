import React from 'react';
import { Wrapper } from './styles';

const ProductCategoryItem = (props) => {

    // const {
    //     item
    // } = props;

    // const {
    //     ProductID,
    //     ProductName,
    //     CarModel,
    //     CarName,
    //     rn,
    //     CarModelFarsi,
    //     CarNameFarsi
    // } = item;

    return (
        <Wrapper>
            <p>{props.CarModelFarsi}</p>

            <p>{props.CarNameFarsi}</p>

            <p>{props.ProductType.productTypeNameFarsi}</p>
        </Wrapper>
    );
}

export default ProductCategoryItem;