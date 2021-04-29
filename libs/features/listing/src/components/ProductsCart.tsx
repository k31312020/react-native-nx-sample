import React, { useState } from 'react';
import { Card, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProductsCart = () =>  {
    const [search] = useState();

    const updateSearch = (event) => {

    }

    const products = [
        {
            id: 1,
            name: 'Test 1'
        },
        {
            id: 2,
            name: 'Test 2'
        }
    ]

    return (
        <>
            {products.map((product) => {
                return (
                    <Card key={product.id}>
                        <Card.Title>{product.name}</Card.Title>
                        <Icon name="file-photo-o" size={50} color="#900" />
                    </Card>
                );
            })}
        </>
    );
}