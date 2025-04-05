import React, { useState, useEffect } from 'react';
import Layout from '../../Views/Layout/index.js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ProductCategoryItem from '../../Views/ProductCategory/ProductCategoryItem/index.js';
import {
    BigScreenWrapper,
    ProductCategoryWrapper
} from './styles.jsx';
import { Grid } from '@mui/material';

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
                <Grid container>
                    {
                        data.map( (item) => {
                            return  (
                                <Grid 
                                    item
                                    lg={3}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    display="flex"
                                    justifyContent="center"
                                    // onClick={() => dispatch(ProductActions.selectProductHandler(item))}
                                >
                                    <ProductCategoryItem
                                        ProductType={productType}
                                        CarID={item.CarID}
                                        CarModel={item.CarModel}
                                        CarName={item.CarName}
                                        CarModelFarsi={item.CarModelFarsi}
                                        CarNameFarsi={item.CarNameFarsi}
                                    />
                                </Grid>
                            )
                        })                    
                    }
                </Grid>
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

                <BigScreenWrapper>
                    <div className="filterDiv">
                        <p>فیلتر</p>
                    </div>

                    <div className="contentDiv">
                        {content()}
                    </div>
                </BigScreenWrapper>

            </ProductCategoryWrapper>
        </Layout>        
    );
}

export default ProductCategory;