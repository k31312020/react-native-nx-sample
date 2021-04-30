export const addProductEffect = (product) => {
    return function(dispatch) {
        fetch('http://10.0.2.2:3000/products', {method: 'POST', body: JSON.stringify(product)})
        .then(response => response.json())
        .then(products => {
            return '';
        }).catch(err => console.log(err));
    }
}