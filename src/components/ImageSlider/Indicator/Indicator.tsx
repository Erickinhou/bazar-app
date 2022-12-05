import { View } from "react-native";
import { styles } from "./styles";

interface Props {
  isActive: boolean;
}

export const Indicator: React.FC<Props> = ({ isActive }) => {
  return (
    <View
      style={[isActive ? styles.borderOutsideActive : styles.borderOutside]}
    >
      <View
        style={[isActive ? styles.indicatorActive : styles.indicator]}
      ></View>
    </View>
  );
};
