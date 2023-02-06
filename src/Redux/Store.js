import { legacy_createStore as createStore , applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducers from './Reducers';
import sagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
        return applyMiddleware(...middleware);    
} 

const store = createStore(reducers, bindMiddleware(middlewares));
sagaMiddleware.run(sagas);
export {store};