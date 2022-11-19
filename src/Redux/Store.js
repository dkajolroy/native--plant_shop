import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {addWishlist} from './Reducer/WishlistReducer';
import {getProduct} from './Reducer/ProductReducer';
import {addCartReducer} from './Reducer/CartReducer';

const Reducer = combineReducers({
  wishlist: addWishlist,
  products: getProduct,
  cart: addCartReducer,
});

const store = createStore(Reducer, applyMiddleware(thunk));
export default store;
