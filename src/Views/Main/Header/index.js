import React from 'react';
import HeaderInputForm from '../Forms/HeaderInputForm';
import BasketAndRegisterLogin from './BasketAndRegisterLogin';
import Categories from './Categories';
import { Wrapper } from './styles';
import Logo from './Logo';

const Header = () => {
    return (
        <Wrapper>
            <div className="upper">
                <div className="basket">
                    <BasketAndRegisterLogin />
                </div>

                <div className="formAndLogo">
                    <HeaderInputForm />

                    <Logo />
                </div>
            </div>
            <div>
                <Categories />
            </div>
        </Wrapper>
    );  
}

export default Header;