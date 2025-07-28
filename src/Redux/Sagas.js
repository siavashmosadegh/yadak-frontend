import {all} from 'redux-saga/effects';

import GeneralSagas from './General/Sagas';
import SearchSagas from './Search/Sagas';
import ProductSagas from './Product/Sagas';
import AuthSagas from './Auth/Sagas';
import CheckoutSagas from './Checkout/Sagas';
import UserSagas from './User/Sagas';

export default function* Sagas (getState) {
    yield all([
        GeneralSagas(),
        SearchSagas(),
        ProductSagas(),
        AuthSagas(),
        CheckoutSagas(),
        UserSagas()
    ]);
}