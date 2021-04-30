export const addProductEffect = (product, navigation) => {
  return function (dispatch) {
    fetch('http://10.0.2.2:3000/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((products) => {
        return navigation.navigate('home');
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'SHOW_ERROR', error: 'Could not create product' });
      });
  };
};
