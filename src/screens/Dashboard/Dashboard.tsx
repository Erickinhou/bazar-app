import { Text, View } from "react-native";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";

type Props = ScreenType<"Dashboard">;

export const Dashboard: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text> Dashboard </Text>
    </View>
  );
};
