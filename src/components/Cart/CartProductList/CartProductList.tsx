import { FlatList, View } from "react-native";
import { ProductI } from "../../ProductSlide";
import { CartProductCard } from "../CartProductCard";
import { styles } from "./styles";

export interface CartProduct {
    product: ProductI;
    amount: number;
}

interface Props {
    products: CartProduct[];
    handleDelete?: (index: number) => void;
    handleAmountChange?: (index: number, amount: number) => void;
}

export const CartProductList: React.FC<Props> = ({ products, handleDelete, handleAmountChange }) => {
    return (
        <View style={styles.container}>
            {products.length > 0 && 
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
            }
        </View>
    );
};