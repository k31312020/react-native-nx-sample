export const getProducts = () => ({
  type: 'GET_PRODUCTS',
});

export const getCart = (product) => ({
    type: 'GET_CART',
});

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
});

export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
});
