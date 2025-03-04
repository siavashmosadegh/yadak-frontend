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
            <div className="imageDiv">
                <p>aks</p>
            </div>

            <div className="titleDiv">
                <p>{props.CarModelFarsi}</p>

                <p>{props.CarNameFarsi}</p>

                <p>{props.ProductType.productTypeNameFarsi}</p>
            </div>
        </Wrapper>
    );
}

export default ProductCategoryItem;