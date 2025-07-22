import React from 'react';
import PlusIcon from '../../../../Icons/Checkout/PlusIcon';
import TrashIcon from '../../../../Icons/Checkout/TrashIcon';
import {
    PlusIconContainer,
    TrashIconContainer,
    Wrapper
} from './styles';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    decreaseProductQuantityInCart,
    increaseProductQuantityInCart
} from '../../../../Redux/Checkout/Actions';

const NumberOfItemsRequested = (props) => {

    const dispatch = useDispatch();

    const {
        shoppingBagId
    } = useSelector((state) => state.Checkout);

    const {
        number,
        productId,
        cartItemId
    } = props;

    return (
        <Wrapper>
            <TrashIconContainer
                onClick={() => dispatch(decreaseProductQuantityInCart(shoppingBagId, productId, cartItemId ))}
            >
                <TrashIcon />
            </TrashIconContainer>

            <span>{number}</span>

            <PlusIconContainer
                onClick={() => dispatch(increaseProductQuantityInCart(shoppingBagId, productId))}
            >
                <PlusIcon />
            </PlusIconContainer>
        </Wrapper>
    );
}

export default NumberOfItemsRequested;