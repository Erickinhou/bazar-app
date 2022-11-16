import { Image, Text, View } from "react-native";
import icon from "../../../assets/images/iconGerandoFalcoes.png";
import { styles } from "./styles";

export const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.text}>Bem Vindo!</Text>
    </View>
  );
};
