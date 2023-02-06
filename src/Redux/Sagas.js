import {all} from 'redux-saga/effects';

import GeneralSagas from './General/Sagas';

export default function* Sagas (getState) {
    yield all([
        GeneralSagas()
    ]);
}