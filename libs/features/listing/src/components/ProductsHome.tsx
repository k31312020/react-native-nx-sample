import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProductsCart } from './ProductsCart';
import { ProductsList } from './ProductsList';
import translationEN from '../i18n/en/en.json';
import translationDE from '../i18n/de/de.json';
import { i18n } from '@selise-react/shared';

export const ProductsHome = ({navigation}) =>  {

    // need to move translation loader to a HOC

    i18n.addResourceBundle('en', 'products', {
        ...translationEN
    });

    i18n.addResourceBundle('de', 'products', {
        ...translationDE
    });

    const { t } = useTranslation(['translation', 'products']);

    let [tabIndex, setTabIndex] = useState<number>(0);

    const changeTabIndex = (index: number): void => {
        setTabIndex(index)
    }

    return (
        <>
            <Tab value={tabIndex} onChange={changeTabIndex}>
                <Tab.Item title={t('products:ITEMS')} icon={<Icon name="tag" size={30} />} />
                <Tab.Item title={t('products:CART')} icon={<Icon name="shopping-bag" size={30} />} />
            </Tab>
            {tabIndex === 0 ? <ProductsList></ProductsList> : <ProductsCart></ProductsCart>}
        </>
    );
}   