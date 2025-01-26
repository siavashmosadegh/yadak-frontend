import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from '../Pages/Main';
import Login from '../Pages/Login';
// import Header from '../Views/Main/Header';
import routePaths from './NameSpace';
import Product from '../Pages/Product';
import Logout from '../Pages/Logout';
import Search from '../Pages/Search';
import CheckoutCart from '../Pages/Checkout/Cart';
import CheckoutShipping from '../Pages/Checkout/Shipping';
import { PrivateRoute } from './PrivateRoute';
import CheckoutPayment from '../Pages/Checkout/Payment';
import Profile from '../Pages/Profile';
import ProfileLists from '../Pages/Profile/ProfileLists';
import ProfileOrders from '../Pages/Profile/ProfileOrders';
import ProfileOpinions from '../Pages/Profile/ProfileOpinions';
import ProfilePersonalInfo from '../Pages/Profile/ProfilePersonalInfo';
import OrderDetails from '../Pages/Profile/OrderDetails';
import ProductCategory from '../Pages/ProductCategory';

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

                <Route
                    path={routePaths.productCategory}
                    element={ <ProductCategory /> }
                />

                {/* <PrivateRoute
                    path={routePaths.checkoutShipping}
                    element={ <CheckoutShipping /> }
                /> */}

                <Route path={routePaths.checkoutShipping} element={<PrivateRoute/>}>
                    <Route path={routePaths.checkoutShipping} element={<CheckoutShipping/>}/>
                </Route>

                <Route path={routePaths.checkoutPayment} element={<PrivateRoute/>}>
                    <Route path={routePaths.checkoutPayment} element={<CheckoutPayment/>}/>
                </Route>

                <Route path={routePaths.profile} element={<PrivateRoute/>}>
                    <Route path={routePaths.profile} element={<Profile />}/>
                </Route>

                <Route path={routePaths.profileLists} element={<PrivateRoute/>}>
                    <Route path={routePaths.profileLists} element={<ProfileLists />}/>
                </Route>

                <Route path={routePaths.profileOrders} element={<PrivateRoute/>}>
                    <Route path={routePaths.profileOrders} element={<ProfileOrders />}/>
                </Route>

                <Route path={routePaths.profileOpinions} element={<PrivateRoute/>}>
                    <Route path={routePaths.profileOpinions} element={<ProfileOpinions />}/>
                </Route>

                <Route path={routePaths.profilePersonalInfo} element={<PrivateRoute/>}>
                    <Route path={routePaths.profilePersonalInfo} element={<ProfilePersonalInfo />}/>
                </Route>

                <Route path={routePaths.profileOrderDetails} element={<PrivateRoute/>}>
                    <Route path={routePaths.profileOrderDetails} element={<OrderDetails />}/>
                </Route>                

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