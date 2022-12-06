import { FlatList, View } from "react-native";
import { ProductI } from "../../ProductSlide";
import { CartProductCard } from "../CartProductCard";
import { styles } from "./styles";


export interface CartProductI {
    product: ProductI;
    amount: number;
}

interface Props {
    products: CartProductI[];
    handleDelete?: (index: number) => void;
    handleAmountChange?: (index: number, amount: number) => void;
}

export const CartProductList: React.FC<Props> = ({ products, handleDelete, handleAmountChange }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.product.id}
                renderItem={({ index, item }) =>
                    <CartProductCard
                        index={index}
                        products={item}
                        handleDelete={handleDelete}
                        handleAmountChange={handleAmountChange}
                    />
                }
            />
        </View>
    );
};