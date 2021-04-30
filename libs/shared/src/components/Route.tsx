import { SignIn, SignUp } from '@selise-react/features/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ProductsHome } from '@selise-react/features/listing';
import { ProductForm } from '@selise-react/features/products';
import { WithNavmenu } from '@selise-react/shared';
import Snackbar from 'react-native-snackbar';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();

export const Route = () => {
  let error = useSelector((state) => state['error']);

  useEffect(() => {
    if (error['error'] !== null) {
      Snackbar.show({
        text: error['error'],
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#CC3366',
      });
    }
  }, [error]);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={WithNavmenu(ProductsHome)} />
        <Stack.Screen name="create" component={WithNavmenu(ProductForm)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
