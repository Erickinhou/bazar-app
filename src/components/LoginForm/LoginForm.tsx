import { useState } from "react";
import { Linking, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Label } from "../Label";
import { styles } from "./styles";
import messageIcon from "../../../assets/images/messageIcon.png";
import lockIcon from "../../../assets/images/lockIcon.png";
import { TextLink } from "../TextLink";
import { Button } from "../Button";
import { api } from "../../service";
import { Input, InputDataChangeProps } from "../Input";
import { validateEmail } from "../../validation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useUser } from "../../context/user";
import { Typography } from "../Typography";

interface FormI {
  password: string;
  email: string;
}

const URL_DONATION =
  "https://doar.gerandofalcoes.com/globoplay/?utm_source=google&utm_medium=search&utm_campaign=institucional-globoplay&utm_content=608731965036&utm_term=gerando%20falc%C3%B5es%20doa%C3%A7%C3%B5es&gclid=CjwKCAiAheacBhB8EiwAItVO22x1cnTxkUglJrNTFxxZaXt_r9Va0eLwIEdoIZuXPslOvYoCBNXzABoCdFMQAvD_BwE";

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState<FormI>({ password: "", email: "" });
  const [disabled, setDisabled] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [_, setUser] = useUser();

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  const navigateToDonation = async () => {
    try {
      await Linking.canOpenURL(URL_DONATION);
      await Linking.openURL(URL_DONATION);
    } catch {
      Toast.show({
        type: "error",
        text1: "Falhou",
        text2: "Não foi possivel achar esse site",
      });
    }
  };

  const navigateToDashboard = () => {
    navigation.navigate("DashboardTabs");
  };

  const handleLogin = async () => {
    setDisabled(true);
    try {
      form.email = form.email.toLocaleLowerCase().trim();
      const { data: user } = await api.post("/signIn", form);
      setUser(user);
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

  const addFormValue = ({ value, type }: InputDataChangeProps) => {
    setForm((prev: any) => {
      return { ...prev, [type]: value };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Typography type="title" style={styles.title}>
        Login
      </Typography>
      <View style={styles.containerInput}>
        <Label icon={messageIcon}>Email</Label>
        <Input
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChangeInput={addFormValue}
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
          onChangeInput={addFormValue}
          setDisabled={setDisabled}
        />
      </View>
      <TextLink onPress={navigateToDonation} theme="primary">
        Doe Aqui!
      </TextLink>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Entrar"
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
