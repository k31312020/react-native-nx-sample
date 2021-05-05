import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProductsHome } from '@selise-react/features/listing';
import { ProductForm } from '@selise-react/features/products';
import { WithNavmenu } from './WithNavmenu';
import WithPullToRefresh from './with-pull-to-refresh';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        name="home"
        component={WithPullToRefresh(WithNavmenu(ProductsHome))}
      />
      <Drawer.Screen
        name="create"
        component={WithPullToRefresh(WithNavmenu(ProductForm))}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
