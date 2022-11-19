import {wishlistData} from '../../Helpers/data';

export const addWishlist = (state = {product: wishlistData}, action) => {
  switch (action.type) {
    case 'ADD_WISHLIST':
      return {product: [...state.product, action.payload]};
    default:
      return state;
  }
};
