import data from './../../Helpers/data';
import {getProductAction} from './ProductAction';
export const addToWishlist = item => (dispatch, state) => {
  const {
    wishlist: {product},
  } = state();
  const checkAlreadyExists = product.find(x => x.id === item.id);

  if (!checkAlreadyExists) {
    dispatch({type: 'ADD_WISHLIST', payload: item});
    getProductAction(data);
  }
};
