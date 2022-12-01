import { FlatList, View } from "react-native";

import { Address } from "../../../screens/ProfileAddress";

import { styles } from "./styles";
import { ProfileAddressCard } from "../ProfileAddressCard";

interface Props {
    addresses: Address[];
}

export const ProfileAddressList: React.FC<Props> = ({ addresses }) => {
    return (
        <View style={styles.container}>
            {addresses?.map((address, index) => (
                <ProfileAddressCard key={address.id} index={index} address={address} />
            ))}
        </View>
    );
};