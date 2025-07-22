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
    increaseProductQuantityInCart
} from '../../../../Redux/Checkout/Actions';

const NumberOfItemsRequested = (props) => {

    const dispatch = useDispatch();

    const {
        shoppingBagId
    } = useSelector((state) => state.Checkout);

    const {
        number,
        productId
    } = props;

    return (
        <Wrapper>
            <TrashIconContainer>
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