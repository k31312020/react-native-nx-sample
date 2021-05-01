export const addProductEffect = (product) => {
  console.log(JSON.stringify(product));
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
        return '';
      })
      .catch((err) => console.log(err));
  };
};
