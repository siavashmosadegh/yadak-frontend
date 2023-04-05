import React from 'react';
import {
    NumberContainer,
    TitleContainer,
    Wrapper
} from './styles';
import { useDispatch } from 'react-redux';
import OrdersActions from '../../../Redux/Orders/Actions';

const ProfileOrdersTab = (props) => {

    const dispatch = useDispatch();

    const {
        title,
        number,
        activeOrdersTab
    } = props;

    console.log(activeOrdersTab);

    const onClickHandler = () => {
        dispatch(OrdersActions.selectActiveOrderTab(title));
    }

    return (
        <Wrapper
            disableMediaQuery={true}
            onClick={onClickHandler}
        >
            <TitleContainer
                title={title}
                activeOrdersTab={activeOrdersTab}
            >
                {title}
            </TitleContainer>

            <NumberContainer
                title={title}
                activeOrdersTab={activeOrdersTab}
            >
                {number}
            </NumberContainer>
        </Wrapper>
    );
}

export default ProfileOrdersTab;