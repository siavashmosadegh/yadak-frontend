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

    const productTypeCarNameCarModelContent = () => {
        if (productTypeNameFarsi !== null && CarNameFarsi !== null && CarModelFarsi !== null) {
            return (
                <p>{productTypeNameFarsi} {CarNameFarsi} {CarModelFarsi}</p>
            );
        }
    }

    return (
        <ProductTypeBrandsItemWrapper>
            <ImageDiv>
                aks
            </ImageDiv>


            {productTypeCarNameCarModelContent()}

            
            <p>برند های این قطعه</p>


            <div className='productsContentDiv'>
                {productContent()}
            </div>
        </ProductTypeBrandsItemWrapper>
    );
}

export default ProductTypeBrandsItem