import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { api } from "../../service";
import { useUser } from "../../context/user";

import { styles } from "../ProfileAddress/styles";
import { OrderI } from "../Order";
import { ProfileOrdersList } from "../../components/ProfileOrders/ProfileOrdersList";
import { ScreenType } from "../../navigation/types";


export interface getOrdersI {
    id: string,
    paymentMethod: string,
    status: string,
    createdDate: string,
}

type Props = ScreenType<"ProfileOrders">;

export const ProfileOrders: React.FC<Props> = () => {

    const [user, _] = useUser()
    const [orders, setOrders] = React.useState<getOrdersI[]>([]);

    const getOrders = async () => {
        const { data: order } = await api.get("/orders", {
            params: {
                filter: {
                    userId: user.id,
                },
            },
        });
        order.sort((a: getOrdersI, b: getOrdersI) => {
            return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
        });
        setOrders(order);
    }

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <View style={styles.container}>
            <ProfileOrdersList orders={orders} />
        </View>
    );
};