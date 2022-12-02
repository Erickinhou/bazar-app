import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Address } from "../../../screens/ProfileAddress";

import { styles } from "./styles";
import { Button } from "../../Button";
import { NavigationProps } from "../../../navigation/types";
import { ProfileAddressCard } from "../ProfileAddressCard";

interface Props {
    addresses: Address[];
}

export const ProfileAddressList: React.FC<Props> = ({ addresses }) => {

    const [disabled, setDisabled] = React.useState(false);
    const navigation = useNavigation<NavigationProps>();

    const handleAddAddress = () => {
        navigation.navigate("ProfileAddressForm");
    }

    return (
        <View style={styles.container}>
            <View style={styles.addressContainer}>
                {addresses?.map((address, index) => (
                    <ProfileAddressCard key={address.id} index={index} address={address} />
                ))}
            </View>
            <View>
                <Button
                    type="primary"
                    text="Adicionar novo endereco"
                    onPressIn={handleAddAddress}
                    disabled={disabled}
                />
            </View>
        </View>
    );
};