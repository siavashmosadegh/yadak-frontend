import React from 'react';
import Header from '../Main/Header';
import { LayoutWrapper } from './styles';

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <div className="headerWrapper">
                <Header />
            </div>

            <div className="childrenWrapper">
                {props.children}
            </div>
        </LayoutWrapper>
    );
}

export default Layout;