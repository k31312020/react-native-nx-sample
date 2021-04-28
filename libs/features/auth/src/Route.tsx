import { SignUp } from './components/signup';
import { SignIn } from './components/signin';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react';

const Auth ={
    SignIn : {
        screen: SignIn
    },
    SignUp : {
        screen: SignUp
    },
}
  
  const Stack = createStackNavigator();
  
  const Route = () => (
      <NavigationContainer>
          <Stack.Navigator headerMode='none'>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
      </NavigationContainer>
  );

export default Route;