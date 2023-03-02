import React from 'react';
import Header from '../Main/Header';
import ResponsiveHeader from '../Main/ResponsiveHeader';
import Footer from './Footer';
import { LayoutWrapper } from './styles';

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <div className="headerWrapper">
                <Header />
            </div>

            <div className="responsiveHeaderWrapper">
                <ResponsiveHeader />
            </div>

            <div className="childrenWrapper">
                {props.children}
            </div>

            <div>
                <Footer />
            </div>
        </LayoutWrapper>
    );
}

export default Layout;