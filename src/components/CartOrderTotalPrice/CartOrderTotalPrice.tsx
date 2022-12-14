import { View } from "react-native"
import { Typography } from "../Typography"
import { CartProductI } from "../Cart/CartProductList"
import { styles } from "./styles"

interface Props {
    products: CartProductI[];
    style?: any;
    children?: React.ReactNode;
}


export const CartOrderTotalPrice: React.FC<Props> = ({ products, style, children }) => {

    const handleShowTotalPrice = () => {
        let totalPrice = 0;
        products.forEach((product) => {
            let price = product.product.price;
            price = price.replace(",", ".");
            totalPrice += parseFloat(price) * product.amount;
        })
        return totalPrice.toFixed(2).replace(".", ",");
    }

    return (
        <View style={styles.container}>
            <Typography type="largeParagraph" style={style}>
                {children}R${handleShowTotalPrice()}
            </Typography>
        </View>
    )
}