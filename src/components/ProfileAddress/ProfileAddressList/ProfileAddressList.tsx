import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
  const navigation = useNavigation<NavigationProps>();

  const handleAddAddress = () => {
    navigation.navigate("ProfileAddressForm");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.addressCardContainer}>
        {addresses?.map((address, index) => (
          <ProfileAddressCard
            key={address.id}
            index={index}
            address={address}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Adicionar novo endereco"
          onPressIn={handleAddAddress}
        />
      </View>
    </View>
  );
};
