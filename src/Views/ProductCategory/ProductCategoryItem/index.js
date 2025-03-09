import React from 'react';
import { Wrapper } from './styles';
import { Link } from 'react-router-dom';

const ProductCategoryItem = (props) => {

    console.log(props);

    // const {
    //     item
    // } = props;

    // const {
    //     ProductID,
    //     ProductName,
    //     CarModel,
    //     CarName,
    //     rn,
    //     CarModelFarsi,
    //     CarNameFarsi
    // } = item;

    return (
        <Link to={`/car-brand?CarModel=${props.CarModel}&CarName=${props.CarName}&productTypeID=${props.ProductType.productTypeID}`}>
            <Wrapper>
                <div className="imageDiv">
                    <p>aks</p>
                </div>

                <div className="titleDiv">
                    <p>{props.CarModelFarsi}</p>

                    <p>{props.CarNameFarsi}</p>

                    <p>{props.ProductType.productTypeNameFarsi}</p>
                </div>
            </Wrapper>
        </Link>
    );
}

export default ProductCategoryItem;