import React from 'react';
import LeftArrowIcon from '../../../Icons/Header/LeftArrowIcon';
import LoginIcon from '../../../Icons/LoginIcon';
import {
    LeftArrowIconContainer,
    LoginIconContainer,
    Wrapper
} from './styles';

const LoginToAccount = () => {
    return (
        <Wrapper>
            <div className="firstRow">
                <LeftArrowIconContainer>
                    <LeftArrowIcon />
                </LeftArrowIconContainer>

                <h3>ورود به حساب کاربری</h3>

                <LoginIconContainer>
                    <LoginIcon />
                </LoginIconContainer>
            </div>
        </Wrapper>
    );
}

export default LoginToAccount;