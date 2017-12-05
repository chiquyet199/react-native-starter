import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const middleWares = [thunk];

middleWares.push(logger);

export default createStore(reducers, applyMiddleware(...middleWares));
