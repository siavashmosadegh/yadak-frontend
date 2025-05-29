import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsWrapper } from './styles';
import {
    getSelectedProductCar,
    getSelectedProductCategory,
    getSelectedProductProductType,
    getSelectedProductTypeBrand
} from '../../../Redux/Product/Actions';
import isAvailable from '../../../Util/IsAvailable';

const Details = (props) => {

    const dispatch = useDispatch();

    console.log(`productId productId productId productId: ${props.productId}`);

    const ProductState = useSelector((state) => state.Product);
    const {
        selectedProductCategory,
        selectedProductProductTypeBrand,
        selectedProductCar,
        selectedProductProductType
    } = ProductState;

    const {
        productId
    } = props;

    useEffect(() => {
        if (productId ?? false) {
            dispatch(getSelectedProductCategory(productId));
        }
        console.log(`selectedProductCategory : ${selectedProductCategory}`);
    },[productId]);

    useEffect(() => {
        if (productId ?? false) {
            dispatch(getSelectedProductTypeBrand(productId));
        }
    },[productId]);

    useEffect(() => {
        if (productId ?? false) {
            dispatch(getSelectedProductCar(productId));
        }
        console.log(`selectedProductCar : ${selectedProductCar}`);
    },[productId]);

    useEffect(() => {
        if (productId ?? false) {
            dispatch(getSelectedProductProductType(productId));
        }
        console.log(`برند محصول : ${selectedProductProductType}`);
    },[productId]);
    
    return (
        <DetailsWrapper>
            <div className="item">
                <p className="rightParagraph">دسته بندی</p>

                {isAvailable(selectedProductCategory) && (
                    <p className="leftParagraph">{selectedProductCategory.FarsiCategoryName}</p>                    
                )}
            </div>

            <div className="item">
                <p className="rightParagraph">برند</p>

                {isAvailable(selectedProductProductTypeBrand) && (
                    <p className="leftParagraph">{selectedProductProductTypeBrand.ProductTypeBrandNameFarsi}</p>                    
                )}
            </div>

            <div className="item">
                <p className="rightParagraph">قطعه</p>

                {isAvailable(selectedProductProductType) && (
                    <p className="leftParagraph">{selectedProductProductType.productTypeNameFarsi}</p>                    
                )}
            </div>

            <div className="item">
                <p className="rightParagraph">خودرو</p>

                <p className="leftParagraph">‍پزو ‍‍پارس</p>
            </div>
        </DetailsWrapper>
    );
}

export default Details;