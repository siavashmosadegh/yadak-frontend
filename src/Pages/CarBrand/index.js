import React, { useEffect, useState } from 'react';
import Layout from '../../Views/Layout';
import { Wrapper } from './styles';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const CarBrand = () => {

    // Initialize useSearchParams to access query parameters
    const [searchParams] = useSearchParams();

    // Get the initial `productTypeID` parameter from the URL
    const initialProductTypeID = searchParams.get('productTypeID');

    // Initialize useState with the productTypeID value
    const [productTypeID, setProductTypeID] = useState(initialProductTypeID || '');

    // Initialize productType with request sent using productTypeID
    const [productType, setProductType] = useState(null);

    useEffect(() => {
        if (productTypeID !== null && productTypeID !== undefined) {
            axios.get(`http://localhost:8080/api/v1/productType/get-product-type-by-id/${productTypeID}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data.result[0]);
                    setProductType(response.data.result[0]);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
            })
                .finally(function () {
                    // always executed
            });
        }
    },[productTypeID]);

    // Car

    // Get the initial `carID` parameter from the URL
    const initialCarID = searchParams.get('CarID');

    // Initialize useState with the carID value
    const [carID, setCarID] = useState(initialCarID || '');

    // Initialize car with request sent using carID
    const [car, setCar] = useState(null);

    useEffect(() => {
        if (carID !== null && carID !== undefined) {
            console.log(carID);
            axios.get(`http://localhost:8080/api/v1/car/get-car-by-car-id/${carID}`)
                .then(function (response) {
                    // handle success
                    setCar(response.data.result[0]);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
            })
                .finally(function () {
                    // always executed
            });
        }
    },[carID]);

    const headerContent = () => {
        if (productType !== null && car !== null) {
            return (
                <h1>خرید {productType.productTypeNameFarsi} {car.CarNameFarsi} {car.CarModelFarsi}</h1>
            );
        }
    }

    return (
        <Layout>
            <Wrapper>
                {headerContent()}
            </Wrapper>
        </Layout>
    );
}

export default CarBrand;