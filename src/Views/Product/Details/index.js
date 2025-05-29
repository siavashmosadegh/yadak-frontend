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
    },[productId]);

    useEffect(() => {
        if (productId ?? false) {
            dispatch(getSelectedProductProductType(productId));
        }
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

                {isAvailable(selectedProductCar) && (
                    <p className="leftParagraph">{selectedProductCar.CarNameFarsi} {selectedProductCar.CarModelFarsi}</p>
                )}
            </div>
        </DetailsWrapper>
    );
}

export default Details;