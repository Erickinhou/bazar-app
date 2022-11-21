import { Image, Text, View } from "react-native";
import icon from "../../../assets/images/iconGerandoFalcoes.png";
import { Typography } from "../Typography";
import { styles } from "./styles";

export const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <Typography type="title" style={styles.text}>
        Bem Vindo!
      </Typography>
    </View>
  );
};
