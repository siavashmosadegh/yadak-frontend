import React from 'react';
import EmptyBookshelfIcon from '../../Icons/EmptyBookshelfIcon';
import {
    EmptyWrapper,
    IconContainer
} from './styles';

const Empty = (props) => {

    const {
        title,
        width,
        height
    } = props;
    return (
        <EmptyWrapper
            disableMediaQuery={true}
            flexDirection="column"
            justifyContent="center"
            width={width}
            height={height}
        >
            <IconContainer>
                <EmptyBookshelfIcon />
            </IconContainer>

            <p>{title}</p>
        </EmptyWrapper>
    );
}

export default Empty;