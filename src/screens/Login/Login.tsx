import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { LoginForm } from "../../components/LoginForm";
import { Welcome } from "../../components/Welcome";
import { RootStackParamList } from "../../navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export const Login: React.FC<Props> = ({ navigation }) => {
  const navigateToRegister = () => {
    navigation.push("Register");
  };
  return (
    <View style={styles.container}>
      <Welcome />
      <View style={styles.formContainer}>
        <LoginForm navigateToRegister={navigateToRegister} />
      </View>
    </View>
  );
};
