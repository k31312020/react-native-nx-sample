export const getProducts = (products) => ({
  type: 'GET_PRODUCTS',
  products
});

export const getCart = (product) => ({
    type: 'GET_CART',
});

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    product
});

export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
});

export const getProductsEffect = (query?: string) => {
    return function(dispatch) {
        fetch('http://10.0.2.2:3000/products')
        .then(response => response.json())
        .then(products => {
            products = query ? products.filter(product => product.productName.includes(query)) : products;
            return dispatch(getProducts(products));
        }).catch(err => console.log(err));
    }
}
