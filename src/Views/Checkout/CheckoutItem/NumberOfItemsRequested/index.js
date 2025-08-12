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
import Loader from '../../../../UI-Kit/Loader/Loader';

const NumberOfItemsRequested = (props) => {

    const dispatch = useDispatch();

    const {
        shoppingBagId,
        cartQuantityUpdateLoading
    } = useSelector((state) => state.Checkout);

    const {
        number,
        productId,
        cartItemId
    } = props;


    return (
        <Wrapper>
            {
                cartQuantityUpdateLoading === true
                    ?
                        <Loader
                            width="35px"
                            height="35px"
                            componentSize="35px"
                        />
                    :
                    <>
                    
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
                    </>
            }
        </Wrapper>
    );
}

export default NumberOfItemsRequested;