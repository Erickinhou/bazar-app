import React from "react";
import { SafeAreaView, View } from "react-native";

import { Input, InputDataChangeProps } from "../../Input";
import { Button } from "../../Button";

import { styles } from "./styles";
import { Label } from "../../Label";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../navigation/types";
import { api } from "../../../service";
import { useUser } from "../../../context/user";

interface FormI {
    street: string;
    number: number;
    district: string;
    complement: string;
    cep: string;
    user: {
        id: string;
    };
}

export const ProfileAddressForm: React.FC = () => {
    const [user] = useUser()
    const [addrForm, setAddrForm] = React.useState<FormI>({
        street: "",
        number: 0,
        district: "",
        complement: "",
        cep: "",
        user: {
            id: user.id
        }
    })
    const [disabled, setDisabled] = React.useState(false);
    const navigation = useNavigation<NavigationProps>();

    const handleSubmit = async () => {
        setDisabled(true);
        try {
            addrForm.number = Number(addrForm.number);
            await api.post("/address", addrForm);
            navigation.navigate("ProfileMenu");
            Toast.show({
                type: "success",
                text1: "Registro concluido",
                text2: "Dados de endereço cadastrados com sucesso",
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
                <Button
                    type="primary"
                    text="Adicionar"
                    onPressIn={handleSubmit}
                    disabled={disabled}
                />
            </View>
        </SafeAreaView>
    );
}