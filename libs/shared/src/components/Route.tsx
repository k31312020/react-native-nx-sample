import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Snackbar from 'react-native-snackbar';
import { SignIn, SignUp } from '@selise-react/features/auth';
import DrawerNavigation from './DrawerNavigation';
import theme from 'react-native-elements/dist/config/theme';

const Stack = createStackNavigator();

export const Route = () => {
  let error = useSelector((state) => state['error']);

  useEffect(() => {
    if (error['error'] !== null) {
      Snackbar.show({
        text: error['error'],
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:
          error['msgType'] === 'error'
            ? theme.colors.error
            : theme.colors.success,
      });
    }
  }, [error]);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="main" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
