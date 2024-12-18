import React from 'react';
import { Wrapper } from './styles';

const SubMenuItem = (props) => {

    const {
        title
    } = props;

    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
}

export default SubMenuItem;