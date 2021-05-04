import React, { useState } from 'react';
import { Header, Text, Overlay, Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logOutEffect } from '../store/actions';
import { LanguageSwitcher } from './LanguageSwitcher';

export const WithNavmenu = (WrappedComponent) => ({ navigation, props }) => {
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    navigation.openDrawer();
  };

  const logout = () => {
    dispatch(logOutEffect(navigation));
  };

  return (
    <>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: toggleDrawer }}
        rightComponent={{ icon: 'logout', color: '#fff', onPress: logout }}
      ></Header>
      <LanguageSwitcher />
      <WrappedComponent {...props} />
    </>
  );
};
