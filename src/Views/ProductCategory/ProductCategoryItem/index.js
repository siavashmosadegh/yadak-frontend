import React from 'react';
import { Wrapper } from './styles';
import { Link } from 'react-router-dom';

const ProductCategoryItem = (props) => {

    const {
        mode
    } = props;

    const renderContent = () => {
        if (mode === "product-type") {
            return (
                <Link to={`/car-brand?CarID=${props.CarID}&productTypeID=${props.ProductType.productTypeID}`}>
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
        } else if (mode === "category") {
            return (
                <Link to={`/car-brand?CarID=${props.CarID}&productTypeID=${props.productTypeID}`}>
                    <Wrapper>
                        <div className="imageDiv">
                            <p>aks</p>
                        </div>

                        <div className="titleDiv">
                            <p>{props.CarModelFarsi}</p>

                            <p>{props.CarNameFarsi}</p>

                            <p>{props.productTypeNameFarsi}</p>
                        </div>
                    </Wrapper>
                </Link>
            );
        }
    }
    return (
        <span>
            {renderContent()}
        </span>
    );
}

export default ProductCategoryItem;