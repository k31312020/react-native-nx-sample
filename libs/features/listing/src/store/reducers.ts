const INITIAL_STATE = {
  cart: [],
  products: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action['products'] };
    case 'ADD_PRODUCTS': 
      return { ...state, products: [...state.products, ...action['products']]};
    case 'ADD_TO_CART': 
      let { cart } = state;
      if (!cart.find(item => item.id === action['product'].id)) {
        cart.push(action['product']);
      }
      return { ...state, cart};
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action['product'].id)};
    default:
      return state;
  }
};
