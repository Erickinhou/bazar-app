import { Text, View } from "react-native";
import { PixPayment } from "../../components/PixPayment";
import { styles } from "./styles";

export const Pix: React.FC = () => {
  return (
    <View style={styles.container}>
      <PixPayment />
    </View>
  );
};
