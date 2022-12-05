import React from 'react';
import { View } from "react-native"

import data from "./data.json"
import { styles } from "./styles"

import { CartProductList } from '../../components/Cart/CartProductList';
import { Button } from '../../components/Button';

export const Cart = () => {

    const [products, setProducts] = React.useState(data)

    return (
        <View style={styles.container}>
            <CartProductList products={products}/>
            <Button text="Realizar pedido" onPress={() => console.log("Checkout")}/>
        </View>
    )
}   