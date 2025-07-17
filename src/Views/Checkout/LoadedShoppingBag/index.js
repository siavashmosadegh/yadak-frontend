import React from 'react';
import TrashIcon from '../../../Icons/Checkout/TrashIcon';
import {
    DeleteEverythingButton,
    Header,
    TrashIconContainer,
    Wrapper
} from './styles';
import { useDispatch , useSelector } from 'react-redux';
import { deleteEverythingFromCartViaCartId } from '../../../Redux/Checkout/Actions';
import CheckoutItem from '../CheckoutItem/index';

const LoadedShoppingBag = (props) => {

    const {
        items
    } = props;

    const dispatch = useDispatch();

    const {
        shoppingBagId
    } = useSelector((state) => state.Checkout);

    return (
        <Wrapper>
            <Header
                disableMediaQuery={true}
            >
                <span className="headerTitle">سبد خرید شما</span>

                <DeleteEverythingButton
                    onClick={() => dispatch(deleteEverythingFromCartViaCartId( shoppingBagId ))}
                >
                    <span>حذف همه چیز</span>

                    <TrashIconContainer>
                        <TrashIcon />
                    </TrashIconContainer>
                </DeleteEverythingButton>
            </Header>
            {
                items.map( (item) => {
                    return (
                        <CheckoutItem
                            key={item.id}
                            item={item}
                        />
                    );
                })
            }
        </Wrapper>
    );
}

export default LoadedShoppingBag;