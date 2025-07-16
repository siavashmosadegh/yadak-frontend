import React from 'react';
import AvailableInStoreIcon from '../../../../Icons/ProductIcons/AvailableInStoreIcon';
import EuroPriceIcon from '../../../../Icons/ProductIcons/EuroPriceIcon';
import UnavailableInStoreIcon from '../../../../Icons/ProductIcons/UnavailableInStoreIcon';
import VerifiedIcon from '../../../../Icons/ProductIcons/VerifiedIcon';
import CustomButton from '../../../../UI-Kit/CustomButton';
import { Line, Wrapper } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increaseProductQuantityInCart } from '../../../../Redux/Checkout/Actions';

const Store = (props) => {

    const navigate = useNavigate();

    const {
        available,
        price
    } = props;

    const {
        isLoggedIn
    } = useSelector((state) => state.Auth);

    const {
        shoppingBagId
    } = useSelector((state) => state.Checkout);

    const {
        selectedProduct
    } = useSelector((state) => state.Product);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <div className="verified">
                <VerifiedIcon />

                <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
            </div>

            <Line />

            <div className="verified">
                {
                    available[0].Quantity !== 0
                        ?
                        <AvailableInStoreIcon />
                        :
                        <UnavailableInStoreIcon />
                }
                {
                    available[0].Quantity !== 0
                        ?
                        <p>موجود در انبار</p>
                        :
                        <p>ناموجود در بازار</p>
                }
            </div>

            <Line className="lowerLine"/>

            <div className="price">
                <div className="innerDiv">
                    <EuroPriceIcon />

                    <p>قیمت</p>
                </div>

                <div className="innerDiv">
                    <p className="number">{price.toLocaleString()}</p>

                    <p>تومان</p>
                </div>
            </div>

            <div className="buttonDiv">
                <CustomButton
                    width="85%"
                    height="50px"
                    title="افزودن به سبد"
                    backgroundColor="red"
                    borderRadius="15px"
                    border="none"
                    color="white"
                    fontSize="20px"
                    fontWeight="bold"
                    onClick={() => {
                        isLoggedIn === true
                            ? dispatch(increaseProductQuantityInCart(shoppingBagId, selectedProduct?.ProductID))
                            : navigate("/login", { state: { backURL: window.location.pathname } });
                    }}
                />
            </div>
        </Wrapper>
    );
}

export default Store;