import React from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { styles } from "./styles";
import { Typography } from "../../Typography";
import { CartProduct } from '../CartProductList';

import deleteIcon from "../../../../assets/images/deleteIcon.png";

interface Props {
    index: number;
    products: CartProduct;
    handleDelete?: (index: number) => void;
    handleAmountChange?: (index: number, amount: number) => void;
}

export const CartProductCard: React.FC<Props> = ({ index, products, handleDelete, handleAmountChange }) => {
    const { product, amount } = products;
    const { title, price, images } = product;

    const handleDeletePress = () => {
        handleDelete(index);
    };
    const handleMinus = () => {
        if (amount > 1) {
            handleAmountChange(index, -1);
        }
    };
    const handlePlus = () => {
        handleAmountChange(index, 1)
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: images[0] }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Typography type="paragraph" style={styles.title}> {title} </Typography>
                <Typography type="paragraph" style={styles.price}> R${price} </Typography>
                <View style={[{ justifyContent: "space-between" }, styles.amountContainer]}>
                    <View style={styles.amountContainer}>
                        <Typography type="paragraph"> Quantidade:  </Typography>
                        <TouchableOpacity style={styles.amountButton} onPress={handleMinus}>
                            <Typography type="paragraph" style={styles.amountButtonText}> {"-"} </Typography>
                        </TouchableOpacity>
                        <Typography type="paragraph"> {amount} </Typography>
                        <TouchableOpacity style={styles.amountButton} onPress={handlePlus}>
                            <Typography type="paragraph" style={styles.amountButtonText}> {"+"} </Typography>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleDeletePress}>
                        <Image source={deleteIcon} style={styles.deleteIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}