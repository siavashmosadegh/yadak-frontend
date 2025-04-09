import React from 'react';
import { Wrapper } from './styles';

const CarTrimLevelItem = (props) => {

    console.log(props.TrimLevel);

    return (
        <Wrapper>
            <p>{props.TrimLevel}</p>
        </Wrapper>
    );
}

export default CarTrimLevelItem;