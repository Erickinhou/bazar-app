import React, { useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { api } from "../../../service";

import { NavigationProps } from "../../../navigation/types";
import { getOrdersI } from "../../../screens/ProfileOrders";
import { Typography } from "../../Typography";
import { styles } from "./styles";

interface Props {
    order: getOrdersI;
    index: number;
}

export const ProfileOrdersCard: React.FC<Props> = ({ order, index }) => {

    const navigation = useNavigation<NavigationProps>();

    const handleOrderStatus = (status: string) => {
        switch (status) {
            case "processing":
                return "Em processamento";
            case "paid":
                return "Pago";
            case "local_receive":
                return "Retirada no local";
            case "complete":
                return "Completo";
            default:
                return "Status não encontrado";
        }
    };

    const handleTime = (time: string) => {
        const date = new Date(time);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
    }

    const handleClick = () => {
        navigation.navigate("ProfileOrderDetails", { order: order });
    };

    return (
        <TouchableOpacity onPress={handleClick}>
            <View style={styles.container}>
                <Typography type="paragraph"> Pedido: {index} </Typography>
                <Typography type="paragraph"> Status: {handleOrderStatus(order.status)} </Typography>
                <Typography type="paragraph"> Data: {handleTime(order.createdDate)} </Typography>
            </View>
        </TouchableOpacity>
    );
};