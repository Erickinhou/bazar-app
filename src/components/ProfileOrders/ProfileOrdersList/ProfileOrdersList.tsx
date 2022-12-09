import {  FlatList, View } from "react-native"

import { getOrdersI } from "../../../screens/ProfileOrders";
import { ProfileOrdersCard } from "../ProfileOrdersCard";
import { styles } from "./styles";

interface Props {
    orders: getOrdersI[]
}

export const ProfileOrdersList: React.FC<Props> = ({ orders }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <ProfileOrdersCard order={item} index={index} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};