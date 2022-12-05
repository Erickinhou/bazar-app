import React from 'react';
import { View } from "react-native"

import data from "./data.json"
import { styles } from "./styles"

import { CartProductList } from '../../components/Cart/CartProductList';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';

export const Cart = () => {

    const [products, setProducts] = React.useState(data)

    return (
        <View style={styles.container}>
            <Typography type="subtitle" style={styles.title}> Carrinho </Typography>
            <View style={styles.listContainer}>
                <CartProductList products={products}/>
            </View>
            <Button text="Realizar pedido" onPress={() => console.log("Checkout")}/>
        </View>
    )
}   