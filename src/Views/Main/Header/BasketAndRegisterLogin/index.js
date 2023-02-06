import { Box, Center, Flex } from '@chakra-ui/layout';
import React from 'react';
import { HexToRgba } from '../../../../Util/HexToRgba';
import { BasketIconContainer, LoginIconContainer, Wrapper } from './styles';
import BasketIconTwo from '../../../../Icons/BasketIconTwo';
import LoginIcon from '../../../../Icons/LoginIcon';
import { Link } from 'react-router-dom';
import routePaths from '../../../../Routes/NameSpace';
import {useLocation} from 'react-router-dom';

const BasketAndRegisterLogin = () => {

    const color = HexToRgba("#808080",0.4);

    const location = useLocation();

    const myFunc = () => {
        localStorage.setItem("backURL", location.pathname);
    }

    return (
        <Wrapper>
            {/* <BasketIconContainer> */}
                {/* <BasketIcon /> */}
            {/* </BasketIconContainer> */}

            <BasketIconContainer>
                <BasketIconTwo />
            </BasketIconContainer>

            <Link to={routePaths.login} style={{ textDecoration: 'none' ,color: "black"}}>
                <div className="loginDiv" onClick={() => myFunc()}>
                    <div className="textContainer">
                        {"ورود | ثبت نام"}
                    </div>

                    <LoginIconContainer>
                        <LoginIcon />
                    </LoginIconContainer>
                </div>            
            </Link>
        </Wrapper>
    );
}

export default BasketAndRegisterLogin;