import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Card, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsEffect } from '../store/actions';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

export const ProductsList = () => {
  const { t } = useTranslation(['translation', 'products']);

  let [search, setSearch] = useState<string>();

  let [page, setPage] = useState<number>(1);

  const products = useSelector((store) => store['products'].products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsEffect(null, page));
  }, []);

  const updateSearch = (query: string) => {
    setSearch(query);
    setPage(1);
    console.log(products);
    dispatch(getProductsEffect(query, page));
  };

  const loadMoreProducts = () => {
    setPage(++page);
    dispatch(getProductsEffect(search, page));
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <>
      <SearchBar
        platform="default"
        placeholder={t('products:TYPE_HERE')}
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Card key={item.id}>
            <Card.Title>{item.productName}</Card.Title>
            <Icon style={styles.image} name="file-photo-o" size={50} />
            <Card.Divider />
            <Button
              title={t('products:ADD_TO_CART')}
              icon={<Icon name="cart-plus" size={30} style={styles.mRight}/>}
              onPress={() => addToCart(item)}
            ></Button>
          </Card>
        )}
      />
    </>
  );
};
