import React, { useState, useEffect } from 'react';
import Layout from '../../Views/Layout/index.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ProductCategoryItem from '../../Views/ProductCategory/ProductCategoryItem/index.js';

const ProductCategory = () => {

    // data is the content we want to show in the current page
    const [data, setData] = useState([]);

    // Initialize useSearchParams to access query parameters
    const [searchParams] = useSearchParams();

    // Get the initial `productType` parameter from the URL
    const initialProductType = searchParams.get('productType');

    // Initialize useState with the productType value
    const [productType, setProductType] = useState(initialProductType || '');

    // Sync the productType state if it changes in the URL
    useEffect(() => {
        console.log(productType);
        if (initialProductType !== productType) {
        setProductType(initialProductType || '');
        }
    }, [initialProductType, productType]);

    useEffect(() => {
        if (productType !== null && productType !== undefined) {
            axios.get(`http://localhost:8080/api/v1/product-category/${productType}`)
                .then(function (response) {
                    // handle success
                    setData(response.data.result);
                    console.log(response.data.result);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
            })
                .finally(function () {
                    // always executed
            });
        }
    },[productType]);

    const content = () => {
        if (data !== null) {
            console.log(data);
            return (
                data.map( (item) => {
                    return  <ProductCategoryItem
                                item={item}
                            />
                })                    
            );
        }

    }

    return (
        <Layout>
            {content()}
        </Layout>        
    );
}

export default ProductCategory;