import React from 'react';
import { ProductBrandItemWrapper } from './styles';

const ProductBrandItem = (props) => {

    const {
        item
    } = props;
    return (
        <ProductBrandItemWrapper>
            <p>{item.ProductName}</p> <p>{item.Price}</p>
        </ProductBrandItemWrapper>
    );
}

export default ProductBrandItem;