import { SignIn, SignUp } from '@selise-react/features/auth';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { ProductsHome } from '@selise-react/features/listing';
import { ProductForm } from '@selise-react/features/products';
import { WithNavmenu } from '@selise-react/shared';

const Stack = createStackNavigator();

export const Route = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="home" component={WithNavmenu(ProductsHome)} />
      <Stack.Screen name="create" component={WithNavmenu(ProductForm)} />
    </Stack.Navigator>
  </NavigationContainer>
);