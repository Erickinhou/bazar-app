import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  children?: React.ReactNode;
  icon?: ImageSourcePropType;
};

export const Label: React.FC<Props> = ({ children, icon }) => {
  return (
    <View style={styles.container}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
