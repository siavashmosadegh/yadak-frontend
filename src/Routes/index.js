import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from '../Pages/Main';
import Login from '../Pages/Login';
import Header from '../Views/Main/Header';
import routePaths from './NameSpace';
import Product from '../Pages/Product';
import Logout from '../Pages/Logout';
import Search from '../Pages/Search';
import CheckoutCart from '../Pages/Checkout/Cart';

const RoutesList = () => {
    
    return (
        <BrowserRouter>
        
            <Routes>

                <Route
                    path={routePaths.default}
                    element={ <Main /> }
                />

                <Route
                    path={routePaths.login}
                    element={ <Login /> }
                />

                <Route
                    path={routePaths.product}
                    element={ <Product /> }
                />

                <Route
                    path={routePaths.logout}
                    element={ <Logout /> }
                />

                <Route
                    path={routePaths.search}
                    element={ <Search />}
                />

                <Route
                    path={routePaths.checkoutCart}
                    element={ <CheckoutCart /> }
                />

                {/* <Route
                    exact
                    path={routePaths.login}
                    element={ <Header />}
                /> */}

            </Routes>

        </BrowserRouter>
    );
}

export default RoutesList;