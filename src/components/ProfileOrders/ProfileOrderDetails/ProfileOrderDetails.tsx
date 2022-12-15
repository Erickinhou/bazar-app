import React, { useEffect } from "react";
import { View } from "react-native";

import { api } from "../../../service";
import { getOrdersI } from "../../../screens/ProfileOrders/ProfileOrders";
import { styles } from "../../../screens/ProfileAddress/styles";
import { Typography } from "../../Typography";

interface Props {
    route: {
        params: {
            order: getOrdersI;
        };
    };
}

export const ProfileOrderDetails: React.FC<Props> = ({ route }) => {

    const { order } = route.params;
    const [orderProducts, setOrderProducts] = React.useState([]);

    const getOrderProducts = async () => {
        const { data: orderProducts } = await api.get("/orderProducts", {
            params: {
                filter: {
                    orderId: order.id,
                },
            },
        });
        setOrderProducts(orderProducts);
    };

    useEffect(() => {
        getOrderProducts();
    }, []);

    return (
        <View style={styles.container}>
            <Typography type="subtitle"> Produtos: </Typography>
            {orderProducts.map((orderProduct) => (
                <Typography key={orderProduct.id} type="paragraph"> {orderProduct.amount}x - {orderProduct.product.title} </Typography>
            ))}
        </View>
    );
};