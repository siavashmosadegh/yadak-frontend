import React, { useEffect, useState } from 'react';
import { ProductBrandItemWrapper } from './styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductBrandItem = (props) => {

    const {
        item
    } = props;

    const [productBrand, setProductBrand] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/product-type-brand/get-brand-by-product-id/${item.ProductID}`)
            .then(function (response) {
                // handle success
                setProductBrand(response.data.result[0].ProductTypeBrandNameFarsi);
                //setProductBrand(response.data.result[0]);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
            })
                .finally(function () {
                    // always executed
            }
        );
    });

    const productBrandNameContent = () => {
        if (productBrand !== null) {
            return (
                <p style={{fontSize: "12px"}}>{productBrand}</p>
            );
        }
    }
    return (
        <Link to={`/product/?productID=${item.ProductID}`} style={{textDecoration: "none",color: "black"}}>
            <ProductBrandItemWrapper>
                {productBrandNameContent()} <p>تیپ {item.TrimLevelFarsi}</p> <p>{item.Price}</p>
            </ProductBrandItemWrapper>        
        </Link>
    );
}

export default ProductBrandItem;