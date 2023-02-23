import { combineReducers } from "redux";
import General from './General/Reducer';
import Product from './Product/Reducer';

export default combineReducers({
    General,
    Product
});