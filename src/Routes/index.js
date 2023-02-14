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

const RoutesList = () => {
    
    return (
        <BrowserRouter>
        
            <Routes>

                <Route 
                    exact
                    path={routePaths.default}
                    element={ <Main /> }
                />

                <Route 
                    exact
                    path={routePaths.login}
                    element={ <Login />}
                />

                <Route
                    exact
                    path={routePaths.product}
                    element={ <Product /> }
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