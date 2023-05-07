import React from 'react';
import TrashIcon from '../../../Icons/Checkout/TrashIcon';
import {
    DeleteEverythingButton,
    Header,
    TrashIconContainer,
    Wrapper
} from './styles';
import { useDispatch } from 'react-redux';
import CheckoutActions from '../../../Redux/Checkout/Actions';
import CheckoutItem from '../CheckoutItem/index';

const LoadedShoppingBag = (props) => {

    const {
        items
    } = props;

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Header
                disableMediaQuery={true}
            >
                <span className="headerTitle">سبد خرید شما</span>

                <DeleteEverythingButton
                    onClick={() => dispatch(CheckoutActions.deleteEverythingHandler({}))}
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