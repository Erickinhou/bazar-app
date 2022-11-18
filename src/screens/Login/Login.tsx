import { View } from "react-native";
import { LoginForm } from "../../components/LoginForm";
import { Welcome } from "../../components/Welcome";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";

type Props = ScreenType<"Login">;

export const Login: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>
  );
};
