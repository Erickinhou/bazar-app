import { View } from "react-native";
import { RegisterForm } from "../../components/RegisterForm";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";

type Props = ScreenType<"Home">;

export const Register: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};
