import React from "react";
import Toast from "react-native-toast-message";
import { SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Address } from "../../../screens/ProfileAddress";

import { api } from "../../../service";
import { styles } from "./styles";
import { Label } from "../../Label";
import { Button } from "../../Button";
import { Input, InputDataChangeProps } from "../../Input";
import { NavigationProps } from "../../../navigation/types";
import { useUser } from "../../../context/user";

export interface AddressI {
  street: string;
  number: number;
  district: string;
  complement: string;
  cep: string;
  user: {
    id: string;
  };
}

interface Props {
  route: {
    params: {
      address: Address;
    };
  };
}

export const ProfileAddressForm: React.FC<Props> = ({ route }) => {
  const { address } = route.params || {};
  const [user, setUser] = useUser();
  const [addrForm, setAddrForm] = React.useState<AddressI>({
    street: address ? address.street : "",
    number: address ? address.number : 0,
    district: address ? address.district : "",
    complement: address ? address.complement : "",
    cep: address ? address.cep : "",
    user: {
      id: user.id,
    },
  });
  const [disabled, setDisabled] = React.useState(false);
  const navigation = useNavigation<NavigationProps>();

  const handleAddSubmit = async () => {
    try {
      setDisabled(true);
      addrForm.number = Number(addrForm.number);
      const { data: newAddress } = await api.post<Address>(
        "/address",
        addrForm
      );

      setUser((prev) => {
        return { ...prev, defaultAddress: newAddress?.id };
      });
      Toast.show({
        type: "success",
        text1: "Registro concluido",
        text2: "Dados de endereço cadastrados com sucesso",
      });
      navigation.goBack();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falhou",
        text2: err?.response.data.message ?? "Dados de endereço invalidos",
      });
    }
    setDisabled(false);
  };

  const handleEditSubmit = async () => {
    setDisabled(true);
    try {
      addrForm.number = Number(addrForm.number);
      let addrFormCopy = { ...addrForm };
      delete addrFormCopy.user;
      await api.put(`/address/${address.id}`, addrFormCopy);
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: "Registro concluido",
        text2: "Dados de endereço atualizados com sucesso",
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falhou",
        text2: err?.response.data.message ?? "Dados de endereço invalidos",
      });
    }
    setDisabled(false);
  };

  const addFormValue = ({ value, type }: InputDataChangeProps) => {
    setAddrForm((prev: any) => {
      return { ...prev, [type]: value };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Label>Rua: </Label>
        <Input
          placeholder="Rua"
          type="street"
          value={addrForm.street}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label>Numero: </Label>
        <Input
          placeholder="Numero"
          type="number"
          value={String(addrForm.number)}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label>Distrito: </Label>
        <Input
          placeholder="Distrito"
          type="district"
          value={addrForm.district}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label>Complemento: </Label>
        <Input
          placeholder="Complemento"
          type="complement"
          value={addrForm.complement}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label>CEP: </Label>
        <Input
          placeholder="CEP"
          type="cep"
          value={addrForm.cep}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.buttonContainer}>
        {address ? (
          <Button
            type="primary"
            text="Editar"
            onPressIn={handleEditSubmit}
            disabled={disabled}
          />
        ) : (
          <Button
            type="primary"
            text="Adicionar"
            onPressIn={handleAddSubmit}
            disabled={disabled}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
