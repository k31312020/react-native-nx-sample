import React from 'react';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'; 
import { styles } from './styles';

export const ProductsCart = () =>  {
    const cart = useSelector(store => store['products'].cart);

    const dispatch = useDispatch();

    const removeFromCart = (product) => {
        dispatch({type: 'REMOVE_FROM_CART', product});
    }

    return (
        <>
            {cart.map((product) => {
                return (
                    <Card key={product.id}>
                        <Card.Title>{product.productName}</Card.Title>
                        <Icon style={styles.image} name="file-photo-o" size={50} />
                        <Button title="Remove" icon={<Icon style={styles.mRight} name="remove" size={30} />} onPress={() => removeFromCart(product)}></Button>
                    </Card>
                );
            })}
        </>
    );
}