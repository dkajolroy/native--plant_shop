export const getProductAction = data => (dispatch, state) => {
  dispatch({type: 'GET_PRODUCT', payload: data});
};
