import React, { useState } from 'react';
import { Card, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProductsList = () =>  {
    let [search, setSearch] = useState<string>();

    const updateSearch = (text: string) => {
        setSearch(text);
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
            <SearchBar
                platform="default"
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
            {products.map((product) => {
                return (
                    <Card key={product.id}>
                        <Card.Title>{product.name}</Card.Title>
                        <Icon name="file-photo-o" size={50} color="#900" />
                        <Card.Divider/>
                        <Button title="Add to cart" icon={<Icon name="cart-plus" size={30} color="#900" />}></Button>
                    </Card>
                );
            })}
        </>
    );
}