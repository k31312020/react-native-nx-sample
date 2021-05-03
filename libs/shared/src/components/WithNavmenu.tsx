import React, { useState } from 'react';
import { Header, Text, Overlay, Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logOutEffect } from '../store/actions';
import { LanguageSwitcher } from './LanguageSwitcher';

export const WithNavmenu = (WrappedComponent) => ({navigation, props}) => {
    
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    const toggleOverlay = () => {
      setVisible(!visible);
    };

    const logout = () => {
        dispatch(logOutEffect(navigation));
    }

    return (
        <>
            <Header  leftComponent={{ icon: 'menu', color: '#fff', onPress: toggleOverlay }}
                     rightComponent={{ icon: 'logout', color: '#fff', onPress: logout }}>
            </Header>
            <LanguageSwitcher/>
            <WrappedComponent {...props}/>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text onPress={() => navigation.navigate('home')}>List</Text>
                <Divider />
                <Text onPress={() => navigation.navigate('create')}>Create</Text>
            </Overlay>
        </>
    )
};