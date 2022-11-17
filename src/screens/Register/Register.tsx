import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RegisterForm } from "../../components/RegisterForm";
import { Welcome } from "../../components/Welcome";
import { RootStackParamList } from "../../navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export const Register = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};
