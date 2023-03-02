import React from 'react';
import { Link } from 'react-router-dom';
import { LoginIconContainer, Wrapper } from './styles';
import routePaths from '../../../../Routes/NameSpace';
import LoginIcon from '../../../../Icons/LoginIcon';
import { useLocation } from 'react-router-dom';

const RegisterLoginLink = () => {

    const location = useLocation();

    const myFunc = () => {
        localStorage.setItem("backURL", location.pathname);
    }

    return (
        <Wrapper>
            <Link to={routePaths.login}>
                <div className="loginDiv" onClick={() => myFunc()}>
                    <div className="textContainer">
                        {"ورود | ثبت نام"}
                    </div>

                    <div className="secondTextContainer">
                        {"ورود"}
                    </div>

                    <LoginIconContainer>
                        <LoginIcon />
                    </LoginIconContainer>
                </div>            
            </Link>
        </Wrapper>
    );
}

export default RegisterLoginLink;