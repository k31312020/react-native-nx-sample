import { SignUp } from './components/signup';
import { SignIn } from './components/signin';
import React from 'react';
import {Text} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Home = ({navigation}) => (
  <Text onPress = {() => navigation.navigate('SignIn')}>THis is Home</Text>
)

const demo = createSwitchNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
  Home: Home
})
 
  
  

export default createAppContainer(demo);