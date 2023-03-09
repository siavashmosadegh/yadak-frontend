import React from 'react';
import PlusIcon from '../../../../Icons/Checkout/PlusIcon';
import TrashIcon from '../../../../Icons/Checkout/TrashIcon';
import {
    PlusIconContainer,
    TrashIconContainer,
    Wrapper
} from './styles';

const NumberOfItemsRequested = (props) => {

    const {
        number
    } = props;
    return (
        <Wrapper>
            <TrashIconContainer>
                <TrashIcon />
            </TrashIconContainer>

            <span>{number}</span>

            <PlusIconContainer>
                <PlusIcon />
            </PlusIconContainer>
        </Wrapper>
    );
}

export default NumberOfItemsRequested;