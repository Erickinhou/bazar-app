import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { Label } from "../Label";
import { styles } from "./styles";
import messageIcon from "../../../assets/images/messageIcon.png";
import lockIcon from "../../../assets/images/lockIcon.png";
import accountIcon from "../../../assets/images/accountIcon.png";
import phoneIcon from "../../../assets/images/phoneIcon.png";
import clipboardIcon from "../../../assets/images/clipboardIcon.png";
import { Button } from "../Button";
import { api } from "../../service";
import { Input, InputDataChangeProps } from "../Input";
import {
  validateCpf,
  validateEmail,
  validatePhoneNumber,
} from "../../validation";
import { objMap } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../navigation/types";
import { useUser } from "../../context/user";
import { Typography } from "../Typography";

interface FormI {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
}

export const RegisterForm: React.FC = () => {
  const [form, setForm] = useState<FormI>({
    password: "",
    email: "",
    cpf: "",
    name: "",
    phone: "",
  });
  const [disabled, setDisabled] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  const [_, setUser] = useUser();

  const handleSubmit = async () => {
    setDisabled(true);
    try {
      const formattedForm = objMap(form, (value: string) =>
        value.trim()
      ) as FormI;
      formattedForm.email = formattedForm.email.toLocaleLowerCase();
      setForm(formattedForm);

      //Todo: create a way to store this data to check if logged or not
      const { data: user } = await api.post("/signUp", formattedForm);

      setUser(user);
      navigation.navigate("DashboardTabs");
      Toast.show({
        type: "success",
        text1: "Registro concluido",
        text2: "Dados de usuário cadastrados com sucesso",
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falhou",
        text2: err?.response.data.message ?? "Dados de usuário invalidos",
      });
    }
    setDisabled(false);
  };

  const addFormValue = ({ value, type }: InputDataChangeProps) => {
    setForm((prev: any) => {
      return { ...prev, [type]: value };
    });
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={styles.container}
    >
      <Typography type="subtitle" style={styles.title}>
        Crie uma nova conta
      </Typography>
      <View style={styles.containerInput}>
        <Label icon={accountIcon}>Nome</Label>
        <Input
          style={styles.textInput}
          placeholder="Augusto Nunes"
          value={form.name}
          type="name"
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label icon={messageIcon}>Email</Label>
        <Input
          style={styles.textInput}
          placeholder="email@email.com"
          value={form.email}
          type="email"
          validation={validateEmail}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label icon={lockIcon}>Senha</Label>
        <Input
          style={styles.textInput}
          placeholder="Sua senha"
          secureTextEntry={true}
          value={form.password}
          type={"password"}
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label icon={phoneIcon}>Telefone</Label>
        <Input
          style={styles.textInput}
          placeholder="(38) 98834-2117"
          value={form.phone}
          type={"phone"}
          onChangeInput={addFormValue}
          validation={validatePhoneNumber}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.containerInput}>
        <Label icon={clipboardIcon}>CPF</Label>
        <Input
          style={styles.textInput}
          placeholder="123.123.123-12"
          value={form.cpf}
          type="cpf"
          onChangeInput={addFormValue}
          validation={validateCpf}
          setDisabled={setDisabled}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Criar"
          onPressIn={handleSubmit}
          disabled={disabled}
        />
      </View>
    </ScrollView>
  );
};
