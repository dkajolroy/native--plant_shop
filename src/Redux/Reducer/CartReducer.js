export const addCartReducer = (state = {product: []}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const findExisting = state.product.find(x => x.id == action.payload.id);
      if (!findExisting) {
        return {product: [...state.product, action.payload]};
      }
      if (state.product.length < 1) {
        return {product: [action.payload]};
      } else {
        return {
          product: state.product.map(x => {
            if (x.id == action.payload.id) {
              x.quantity = x.quantity + 1;
            }
            return x;
          }),
        };
      }
    default:
      return state;
  }
};
