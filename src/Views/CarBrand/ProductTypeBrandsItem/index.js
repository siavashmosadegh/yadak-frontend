import React from 'react';
import {
    ImageDiv,
    ProductTypeBrandsItemWrapper
} from './styles';
import ProductBrandItem from './ProductBrandItem';

const ProductTypeBrandsItem = (props) => {

    const {
        products,
        productTypeNameFarsi,
        CarNameFarsi,
        CarModelFarsi,
    } = props;

    const productContent = () => {
        if (products !== null) {
            console.log(products);
            return (
                products.map( (item, index) => {
                    return (
                        <ProductBrandItem
                            key={index}
                            item={item}
                        />
                    );
                })
            );
        }
    }
    return (
        <ProductTypeBrandsItemWrapper>
            <ImageDiv>
                aks
            </ImageDiv>

            <p>{productTypeNameFarsi} {CarNameFarsi} {CarModelFarsi}</p>

            
            <p>برند های این قطعه</p>

            {productContent()}
        </ProductTypeBrandsItemWrapper>
    );
}

export default ProductTypeBrandsItem