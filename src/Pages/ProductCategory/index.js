import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../Views/Layout';
import ProductCategoryItem from '../../Views/ProductCategory/ProductCategoryItem';
import {
    BigScreenWrapper,
    ProductCategoryWrapper
} from './styles';
import { Grid, CircularProgress } from '@mui/material';

const ProductCategory = () => {
    const [data, setData] = useState([]);
    const [productType, setProductType] = useState(null);
    const [categoryInfo, setCategoryInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const productTypeID = searchParams.get('productType');
    const categoryID = searchParams.get('category');

    useEffect(() => {
        setLoading(true);
        setData([]);
        setProductType(null);
        setCategoryInfo(null);

        if (productTypeID) {
            axios.get(`http://localhost:8080/api/v1/product-category/product-type/${productTypeID}`)
                .then(res => {
                    setData(res.data.result.data);
                    setProductType(res.data.result.productTypeDetails[0]);
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => setLoading(false));
        } else if (categoryID) {
            axios.get(`http://localhost:8080/api/v1/product-category/category/${categoryID}`)
                .then(res => {
                    setData(res.data.result.data);
                    setCategoryInfo(res.data.result.categoryDetails[0]);
                })
                .catch(err => {
                    console.error(err)
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false); // اگر هیچ چیزی در URL نبود
        }
    }, [productTypeID, categoryID]);

    const renderHeader = () => {
        if (productType) {
            return <h1>خرید {productType.productTypeNameFarsi} ماشین</h1>;
        } else if (categoryInfo) {
            return <h1>محصولات دسته {categoryInfo.categoryNameFarsi}</h1>;
        } else {
            return <h1>دسته‌بندی محصولات</h1>;
        }
    };

    const renderContent = () => {
        if (loading) {
            return <div style={{ textAlign: 'center' }}><CircularProgress /></div>;
        }

        if (data.length === 0) {
            return <p>محصولی یافت نشد.</p>;
        }

        return (
            <Grid container spacing={2}>
                {data.map((item, index) => (
                    <Grid
                        item
                        key={index}
                        lg={3}
                        md={6}
                        sm={12}
                        xs={12}
                        display="flex"
                        justifyContent="center"
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
                ))}
            </Grid>
        );
    };

    return (
        <Layout>
            <ProductCategoryWrapper>
                {renderHeader()}

                <BigScreenWrapper>
                    <div className="filterDiv">
                        <p>فیلتر</p>
                    </div>

                    <div className="contentDiv">
                        {renderContent()}
                    </div>
                </BigScreenWrapper>
            </ProductCategoryWrapper>
        </Layout>
    );
};

export default ProductCategory;
