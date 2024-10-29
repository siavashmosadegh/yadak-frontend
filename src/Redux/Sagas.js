import {all} from 'redux-saga/effects';

import GeneralSagas from './General/Sagas';
import SearchSagas from './Search/Sagas'

export default function* Sagas (getState) {
    yield all([
        GeneralSagas(),
        SearchSagas()
    ]);
}