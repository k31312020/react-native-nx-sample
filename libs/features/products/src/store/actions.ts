import { createProduct } from "../services/api";

export const addProductEffect = (product, navigate) => {

  return function (dispatch) {
    createProduct(product)
      .then((products) => {
        navigate('home');
        return dispatch({
          type: 'SHOW_ERROR',
          error: 'Product added successfully',
          msgType: 'success'
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SHOW_ERROR',
          error: 'Could not create product. Try again.',
          msgType: 'error'
        });
        console.log(err);
      });
  };
};
