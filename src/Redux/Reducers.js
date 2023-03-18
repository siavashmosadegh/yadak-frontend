import { combineReducers } from "redux";
import General from './General/Reducer';
import Product from './Product/Reducer';
import Auth from './Auth/Reducer';
import Search from './Search/Reducer';
import Checkout from './Checkout/Reducer';
import User from './User/Reducer';

export default combineReducers({
    General,
    Product,
    Auth,
    Search,
    Checkout,
    User
});