import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Label } from "../Label";
import { styles } from "./styles";
import messageIcon from "../../../assets/images/messageIcon.png";
import lockIcon from "../../../assets/images/lockIcon.png";
import { TextLink } from "../TextLink";
import { Button } from "../Button";
import { api } from "../../service";

interface FormI {
  password: string;
  email: string;
}
interface HandleInput {
  type: keyof FormI;
  value: string;
}

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState<FormI>({ password: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleInput = ({ type, value }: HandleInput) => {
    setForm((prev) => {
      return { ...prev, [type]: value };
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      form.email = form.email.toLocaleLowerCase().trim();
      const { data } = await api.post("/signIn", form);
      console.log("Go to Dash", data);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falhou",
        text2: err?.response.data.message ?? "Email ou senha invalidos",
      });
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.containerInput}>
        <Label icon={messageIcon}>Email</Label>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          value={form.email}
          onChangeText={(value) => handleInput({ value, type: "email" })}
        />
      </View>
      <View style={styles.containerInput}>
        <Label icon={lockIcon}>Senha</Label>
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => handleInput({ value, type: "password" })}
        />
      </View>
      <TextLink text="Esqueceu a Senha?" />
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text="Entar"
          onPressIn={handleLogin}
          disabled={loading}
        />
        <TextLink
          style={styles.createAccount}
          textAlign="center"
          text="Criar Conta"
        />
      </View>
    </SafeAreaView>
  );
};
