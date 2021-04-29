const INITIAL_STATE = {
  cart: [],
  products: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      const {products} = state;
      
    default:
      return state;
  }
};
