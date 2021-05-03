export const getProducts = (products) => ({
  type: 'GET_PRODUCTS',
  products,
});

export const getCart = (product) => ({
  type: 'GET_CART',
});

export const addProducts = (products) => ({
  type: 'ADD_PRODUCTS',
  products,
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  product,
});

export const removeFromCart = (product) => ({
  type: 'REMOVE_FROM_CART',
});

export const getProductsEffect = (query?: string, page?: number) => {
  return function (dispatch) {
    fetch(`http://10.0.2.2:3000/products?_page=${page || 1}&_limit=3`)
      .then((response) => response.json())
      .then((products) => {
        products = query
          ? products.filter((product) => product.productName.includes(query))
          : products;
        return dispatch(
          query || page === 1 ? getProducts(products) : addProducts(products)
        );
      })
      .catch((err) => {
        // dispatch({ type: 'SHOW_ERROR', error: 'Could not fetch product list' });
        console.log(err);
      });
  };
};
