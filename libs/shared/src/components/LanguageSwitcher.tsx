import React from 'react';
import i18n from '../services/i18n';
import { Text } from 'react-native-elements';
import { styles } from './styles';

export const LanguageSwitcher = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <Text style={styles.center}>
                <Text onPress={() => changeLanguage('de')}>DE</Text>
                <Text> | </Text>
                <Text onPress={() => changeLanguage('en')}>EN</Text>
            </Text>
        </>
    )
}