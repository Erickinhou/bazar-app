import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../Button";
import { Typography } from "../../Typography";

import { Address } from "../../../screens/ProfileAddress";

import { styles } from "./styles";
import { NavigationProps } from "../../../navigation/types";
import Toast from "react-native-toast-message";
import { api } from "../../../service";
import { useUser } from "../../../context/user";

interface Props {
  index: number;
  address: Address;
}

export const ProfileAddressCard: React.FC<Props> = ({ index, address }) => {
  const [user, setUser] = useUser();

  const navigation = useNavigation<NavigationProps>();

  const isActive = user.defaultAddress === address.id;

  const handleDefaultAddress = async () => {
    try {
      if (isActive) return;
      await api.put(`/user/${user?.id}`, {
        ...user,
        defaultAddress: address.id,
      });
      setUser((prev) => {
        return { ...prev, defaultAddress: address.id };
      });
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Endereço selecionado com sucesso",
      });
    } catch (err) {
      Toast.show({
        type: "success",
        text1: "Erro no enderenço",
        text2: "Por favor, faça login novamente",
      });
    }
  };

  const removeAddress = async () => {
    try {
      await api.delete(`/address/${address.id}`);
      navigation.navigate("ProfileMenu");
      Toast.show({
        type: "success",
        text1: "Registro concluido",
        text2: "Endereço removido com sucesso",
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falhou",
      });
    }
  };

  const editAddress = () => {
    navigation.navigate("ProfileAddressForm", { address: address });
  };

  return (
    <Pressable onPress={handleDefaultAddress}>
      <View style={[styles.container, isActive && styles.isActive]}>
        <View style={styles.infoContainer}>
          <Typography type={"paragraph"} style={styles.addressTitle}>
            {""}
            Endereco {index + 1}:{""}
          </Typography>
          <Typography type={"paragraph"}>
            {""}
            {address.street}
            {""}
          </Typography>
          <Typography type={"paragraph"}>
            {""}
            Numero: {address.number}, {address.complement} {""}
          </Typography>
          <Typography type={"paragraph"}>
            {""}
            CEP: {address.cep} - {address.district} {""}
          </Typography>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button text={"Remover"} onPress={removeAddress} />
          </View>
          <View style={styles.button}>
            <Button text={"Editar"} onPress={editAddress} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
