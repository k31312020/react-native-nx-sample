import React, { useEffect, useState } from 'react';
import { Tab } from 'react-native-elements';
import { ProductsList } from './ProductsList'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProductsCart } from './ProductsCart';

export const ProductsHome = ({navigation}) =>  {
    let [tabIndex, setTabIndex] = useState<number>(0);

    const changeTabIndex = (index: number): void => {
        setTabIndex(index)
    }

    return (
        <>
            <Tab value={tabIndex} onChange={changeTabIndex}>
                <Tab.Item title="items" icon={<Icon name="tag" size={30} />} />
                <Tab.Item title="cart" icon={<Icon name="shopping-bag" size={30} />} />
            </Tab>
            {tabIndex === 0 ? <ProductsList></ProductsList> : <ProductsCart></ProductsCart>}
        </>
    );
}   