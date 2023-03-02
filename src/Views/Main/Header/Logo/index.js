import React from 'react';
import { Link } from 'react-router-dom';
import routePaths from '../../../../Routes/NameSpace';
import { Wrapper } from './styles';

const Logo = () => {
    return (
        <Wrapper>
            <Link to={routePaths.default}>   
                سیاوش یدک
            </Link>
        </Wrapper>
    );
}

export default Logo;