import { ThemeProvider } from '@mui/material';
import React from 'react';
import Col from '../../Kit-Components/Col';
import Layout from '../../Views/Layout';
import AmazingOffer from '../../Views/Main/AmazingOffer';
import Header from '../../Views/Main/Header';
import MainPageCarousel from '../../Views/Main/MainPageCarousel';
import MainPageCategories from '../../Views/Main/MainPageCategories/index';
import {useLocation} from 'react-router-dom'

const Main = () => {

    const location = useLocation();

    console.log("trying to solve the 'cant push to remote' problem all over again :(");
    return (
        <Layout>
            {/* <MainPageCarousel /> */}
            <MainPageCarousel />

            <MainPageCategories />

            <AmazingOffer />

            {/* <AmazingOffer />
            <AmazingOffer />
            <AmazingOffer /> */}
        </Layout>
    );
}

export default Main;