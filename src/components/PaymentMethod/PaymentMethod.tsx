import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { OrderI } from "../../screens/Order";
import { Typography } from "../Typography";
import { styles } from "./styles";

interface Props {
  order: Partial<OrderI>;
  changePaymentMethod: (paymentMethod: "pix" | "local") => void;
}

export const PaymentMethod: React.FC<Props> = ({
  order,
  changePaymentMethod,
}) => {
  return (
    <View style={styles.container}>
      <Typography type="largeParagraph">Método de pagamento</Typography>
      <View>
        <Picker
          selectedValue={order?.paymentMethod}
          onValueChange={(itemValue) => changePaymentMethod(itemValue)}
        >
          <Picker.Item label="Pix" value="pix" />
          <Picker.Item label="Retirada Local" value="local" />
        </Picker>
      </View>
    </View>
  );
};
