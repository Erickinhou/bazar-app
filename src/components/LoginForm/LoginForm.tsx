import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Label } from "../Label";
import { styles } from "./styles";
import messageIcon from "../../../assets/images/messageIcon.png";
import lockIcon from "../../../assets/images/lockIcon.png";
import { TextLink } from "../TextLink";
import { Button } from "../Button";
import { api } from "../../service";
import { Input } from "../Input";
import { validateEmail } from "../../validation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

interface FormI {
  password: string;
  email: string;
}

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState<FormI>({ password: "", email: "" });
  const [disabled, setDisabled] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  const navigateToDashboard = () => {
    navigation.navigate("DashboardTabs");
  };

  const handleLogin = async () => {
    setDisabled(true);
    try {
      form.email = form.email.toLocaleLowerCase().trim();
      const { data } = await api.post("/signIn", form);
      setDisabled(false);
      navigateToDashboard();
    } catch (err) {
      setDisabled(false);
      Toast.show({
        type: "error",
        text1: "Falhou",
        text2: err?.response.data.message ?? "Email ou senha invalidos",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.containerInput}>
        <Label icon={messageIcon}>Email</Label>
        <Input
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChangeInput={setForm}
          setDisabled={setDisabled}
          validation={validateEmail}
        />
      </View>
      <View style={styles.containerInput}>
        <Label icon={lockIcon}>Senha</Label>
        <Input
          style={styles.textInput}
          placeholder="Senha"
          type="password"
          secureTextEntry={true}
          value={form.password}
          onChangeInput={setForm}
          setDisabled={setDisabled}
        />
      </View>
      <TextLink theme="primary">Esqueceu a Senha?</TextLink>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Entar"
          onPressIn={handleLogin}
          disabled={disabled}
        />
        <TextLink
          style={styles.createAccount}
          textAlign="center"
          onPressIn={navigateToRegister}
        >
          Criar Conta
        </TextLink>
      </View>
    </SafeAreaView>
  );
};
