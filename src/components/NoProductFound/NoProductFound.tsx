import { Image, ImageSourcePropType, View } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./styles";

interface Props {
  image: ImageSourcePropType;
  title: string;
  text: string;
  iconStyle?: any;
}

export const NoProductFound: React.FC<Props> = ({ image, title, text, iconStyle }) => {
  return (
    <View>
      <Image source={image} style={[styles.icon, iconStyle]} />
      <Typography type="subtitle" style={[styles.noProductFoundText, styles.defaultFont]}>
        {title}
      </Typography>
      <Typography type="paragraph" style={[styles.noProductText, , styles.defaultFont]}>
        {text}
      </Typography>
    </View>
  );
};
