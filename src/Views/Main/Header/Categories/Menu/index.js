import React from 'react';
import { Wrapper } from './styles';
import { useSelector } from 'react-redux';

const Menu = () => {

    const {
        menuData
    } = useSelector((state) => state.General);

    return (
        <Wrapper>
            <div className="menu">
                {menuData.map((item) => {
                    return (
                        <div className="menuItem">
                            {item.headerTitle}
                        </div>
                    );
                })}
            </div>
            <div className="subMenu">

            </div>
        </Wrapper>
    );
}

export default Menu;