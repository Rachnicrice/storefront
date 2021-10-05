import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './reducers/categories.js';
import products from './reducers/products.js';
import cart from './reducers/cart.js';

let reducers = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

console.log('_REDUX_STORE_', store());

export default store();
