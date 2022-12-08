import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./styles";

type Props = {
  children?: React.ReactNode;
  icon?: ImageSourcePropType;
};

export const Label: React.FC<Props> = ({ children, icon }) => {
  return (
    <View style={styles.container}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Typography type="paragraph" style={[styles.text, styles.defaultFont]}>
        {children}
      </Typography>
    </View>
  );
};
