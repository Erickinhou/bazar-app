import React, { useEffect } from 'react';
import { View } from "react-native"
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { styles } from "./styles"
import { NavigationProps } from '../../navigation/types';

import { CartProductList } from '../../components/Cart/CartProductList';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { NoProductFound } from '../../components/NoProductFound';
import { CartOrderTotalPrice } from '../../components/CartOrderTotalPrice';

import headphone from "../../../assets/images/headphone.png";

export const Cart = () => {

    const [products, setProducts] = React.useState([])
    const isFocused = useIsFocused();
    const { getItem, setItem } = useAsyncStorage('@cart');
    const navigation = useNavigation<NavigationProps>();

    const getProducts = async () => {
        const cart = await getItem();
        const cartParsed = cart ? JSON.parse(cart) : [];
        setProducts(cartParsed)
    }

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

    const handleProceedToOrder = () => {
        navigation.navigate("Order");
    }

    useEffect(() => {
        getProducts()
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Typography type="subtitle" style={styles.title}> Carrinho </Typography>
            <View style={styles.listContainer}>
                {products.length > 0 ? (
                    <CartProductList
                        products={products}
                        handleDelete={handleDelete}
                        handleAmountChange={handleAmountChange}
                    />
                ) : (
                    <NoProductFound
                        image={headphone}
                        title={"O carrinho está vazio"}
                        text={"Adicione produtos ao carrinho para continuar"}
                        iconStyle={{ width: 200, height: 200 }}
                    />
                )}
            </View>
            {products.length > 0 && (
                <View>
                    <CartOrderTotalPrice products={products} style={{textAlign: "center"}}>
                        Total: {" "}
                    </CartOrderTotalPrice>
                    <Button text="Realizar pedido" onPress={() => handleProceedToOrder()} />
                </View>
            )}
        </View>
    )
}   