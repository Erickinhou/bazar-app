import { View, Text } from "react-native";

import { Address } from "../../../screens/ProfileAddress";

import { styles } from "./styles";

interface Props {
    address: Address;
}

export const ProfileAddressCard: React.FC<Props> = ({ address }) => {
    return (
        <View style={styles.container}>
            <Text>{address.street}</Text>
            <Text>{address.number}</Text>
            <Text>{address.district}</Text>
            <Text>{address.cep}</Text>
            <Text>{address.complement}</Text>
        </View>
    );
};