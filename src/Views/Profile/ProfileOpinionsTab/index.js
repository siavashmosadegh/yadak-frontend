import React from 'react';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import OrdersActions from '../../../Redux/Orders/Actions';

const ProfileOpinionsTab = (props) => {

    const dispatch = useDispatch();

    const {
        title,
        activeOpinionTab
    } = props;

    const onClickHandler = () => {
        dispatch(OrdersActions.selectActiveOpinionTab(title));
    }

    console.log(activeOpinionTab);

    return (
        <Wrapper
            title={title}
            activeOpinionTab={activeOpinionTab}
            onClick={onClickHandler}
            disableMediaQuery={true}

        >
            <p>{title}</p>
        </Wrapper>
    );
}

export default ProfileOpinionsTab;