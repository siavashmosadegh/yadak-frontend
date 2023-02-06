import React from 'react';
import HeaderInputForm from '../Forms/HeaderInputForm';
import BasketAndRegisterLogin from './BasketAndRegisterLogin';
import Categories from './Categories';
import { Wrapper } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <div className="upper">
                <div className="basket">
                    <BasketAndRegisterLogin />
                </div>

                <div className="formAndLogo">
                    <HeaderInputForm />

                    <div className="logoText">
                        سیاوش یدک
                    </div>
                </div>
            </div>
            <div>
                <Categories />
            </div>
        </Wrapper>
    );  
}

export default Header;