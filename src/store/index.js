import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storefront from './store.js';

let reducers = combineReducers({ storefront });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

console.log('_REDUX_STORE_', store());

export default store();
