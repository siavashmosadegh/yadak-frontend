import React, { useState, useEffect } from 'react';
import Layout from '../../Views/Layout/index.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ProductCategoryItem from '../../Views/ProductCategory/ProductCategoryItem/index.js';
import { ProductCategoryWrapper } from './styles.jsx';

const ProductCategory = () => {

    // data is the content we want to show in the current page
    const [data, setData] = useState([]);

    // Initialize useSearchParams to access query parameters
    const [searchParams] = useSearchParams();

    // Get the initial `productType` parameter from the URL
    const initialProductTypeID = searchParams.get('productType');

    // Initialize useState with the productType value
    const [productTypeID, setProductTypeID] = useState(initialProductTypeID || '');

    const [productType, setProductType] = useState(null);

    // Sync the productType state if it changes in the URL
    useEffect(() => {
        console.log(productTypeID);
        if (initialProductTypeID !== productTypeID) {
        setProductTypeID(initialProductTypeID || '');
        }
    }, [initialProductTypeID, productTypeID]);

    useEffect(() => {
        if (productTypeID !== null && productTypeID !== undefined) {
            axios.get(`http://localhost:8080/api/v1/product-category/${productTypeID}`)
                .then(function (response) {
                    // handle success
                    setData(response.data.result.data);
                    setProductType(response.data.result.productTypeDetails[0]);
                    console.log(response.data.result.data);
                    console.log(response.data.result.productTypeDetails[0]);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
            })
                .finally(function () {
                    // always executed
                    console.log(productType);
            });
        }
    },[productTypeID]);

    const content = () => {
        if (data !== null && productType !== null) {
            console.log(data);
            return (
                data.map( (item) => {
                    return  <ProductCategoryItem
                                ProductType={productType}
                                CarModelFarsi={item.CarModelFarsi}
                                CarNameFarsi={item.CarNameFarsi}
                            />
                })                    
            );
        }

    }

    const headerContent = () => {
        if (productType !== null) {
            return (
                <h1>خرید {productType.productTypeNameFarsi} ماشین</h1>
            );
        }
    }

    return (
        <Layout>
            <ProductCategoryWrapper>
                {headerContent()}

                {content()}
            </ProductCategoryWrapper>
        </Layout>        
    );
}

export default ProductCategory;