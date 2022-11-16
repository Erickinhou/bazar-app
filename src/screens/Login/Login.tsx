import { View } from "react-native";
import { LoginForm } from "../../components/LoginForm";
import { Welcome } from "../../components/Welcome";
import { styles } from "./styles";

export const Login = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>
  );
};
