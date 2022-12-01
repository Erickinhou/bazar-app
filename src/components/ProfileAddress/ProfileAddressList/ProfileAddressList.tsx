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
            <FlatList
                data={addresses}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index }) => 
                    <ProfileAddressCard address={item} index={index} />
                }
            />
        </View>
    );
};