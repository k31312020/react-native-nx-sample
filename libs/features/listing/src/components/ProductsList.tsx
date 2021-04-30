import React, { useState, useEffect } from 'react';
import { Card, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsEffect } from '../store/actions';

export const ProductsList = () => {
  let [search, setSearch] = useState<string>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsEffect());
  }, []);

  const updateSearch = (query: string) => {
    setSearch(query);
    dispatch(getProductsEffect(query));
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const products = useSelector((store) => store['products'].products);

  return (
    <>
      <SearchBar
        platform="default"
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <Button
        title="Press for snackbar"
        onPress={() =>
          dispatch({ type: 'SHOW_ERROR', error: 'Could not create product' })
        }
      />
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <Card.Title>{product.productName}</Card.Title>
            <Icon name="file-photo-o" size={50} />
            <Card.Divider />
            <Button
              title="Add to cart"
              icon={<Icon name="cart-plus" size={30} />}
              onPress={() => addToCart(product)}
            ></Button>
          </Card>
        );
      })}
    </>
  );
};
