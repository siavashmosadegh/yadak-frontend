import React from 'react';
import { UnderLine, Wrapper } from './styles';

const HeaderComponent = (props) => {

    const {
        title,
        font
    } = props;
    return (
        <Wrapper font={font}>
            <div className="content">
                <p>{title}</p>

                <UnderLine />
            </div>
        </Wrapper>
    );
}

export default HeaderComponent;