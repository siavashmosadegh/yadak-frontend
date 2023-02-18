import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/">   
                            سیاوش یدک
                        </Link>
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