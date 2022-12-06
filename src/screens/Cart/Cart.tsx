import React, { useEffect } from 'react';
import { View } from "react-native"
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import { styles } from "./styles"

import { CartProductList } from '../../components/Cart/CartProductList';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';

export const Cart = () => {

    const [products, setProducts] = React.useState([])
    const isFocused = useIsFocused();
    const { getItem, setItem } = useAsyncStorage('@cart');

    useEffect(() => {
        const getProducts = async () => {
            const cart = await getItem();
            const cartParsed = cart ? JSON.parse(cart) : [];
            setProducts(cartParsed)
        }
        getProducts()
    }, [isFocused])

    const handleDelete = async (listIndex: number) => {
        const cart = await getItem();
        const cartParsed = cart ? JSON.parse(cart) : [];
        cartParsed.splice(listIndex, 1);
        await setItem(JSON.stringify(cartParsed));
        setProducts(cartParsed)
    };

    const handleAmountChange = async (listIndex: number, amount: number) => {
        const cart = await getItem();
        const cartParsed = cart ? JSON.parse(cart) : [];
        cartParsed[listIndex].amount += amount;
        await setItem(JSON.stringify(cartParsed));
        setProducts(cartParsed)
    };

    return (
        <View style={styles.container}>
            <Typography type="subtitle" style={styles.title}> Carrinho </Typography>
            <View style={styles.listContainer}>
                <CartProductList 
                    products={products} 
                    handleDelete={handleDelete}
                    handleAmountChange={handleAmountChange}
                />
            </View>
            <Button text="Realizar pedido" onPress={() => console.log("Checkout")}/>
        </View>
    )
}   