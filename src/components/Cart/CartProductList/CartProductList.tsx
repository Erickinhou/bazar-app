import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { State } from "react-native-gesture-handler";
import { ProductI } from "../../ProductSlide";
import { CartProductCard } from "../CartProductCard";
import { styles } from "./styles";

export interface CartProduct {
    product: ProductI;
    amount: number;
}

interface Props {
    products: CartProduct[];
}

export const CartProductList: React.FC<Props> = ({ products }) => {

    const handleAmountChange = (listIndex: number, amount: number) => {
        products[listIndex].amount += amount;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.product.id}
                renderItem={({ index, item }) => <CartProductCard index={index} products={item} handleAmountChange={handleAmountChange} />}
            />
        </View>
    );
};