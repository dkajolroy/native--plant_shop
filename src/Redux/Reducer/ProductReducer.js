import data from '../../Helpers/data';

export const getProduct = (state = {product: data}, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return {product: action.payload};
    default:
      return state;
  }
};
