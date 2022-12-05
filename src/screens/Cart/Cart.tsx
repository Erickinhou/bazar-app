import React, { useEffect } from 'react';
import { Text, View } from "react-native"

import data from "./data.json"
import { styles } from "./styles"

import { CartProductList } from '../../components/Cart/CartProductList';

export const Cart = () => {

    const [products, setProducts] = React.useState(data)

    return (
        <View style={styles.container}>
            <CartProductList products={products}/>
        </View>
    )
}   