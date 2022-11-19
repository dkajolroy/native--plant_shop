export const addCart = item => dispatch => {
  dispatch({type: 'ADD_TO_CART', payload: item});
};
