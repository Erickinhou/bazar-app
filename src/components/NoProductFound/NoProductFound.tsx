import { Image, View } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./styles";
import { Product } from "../ProductSlide";
import interrogrationMark from "../../../../assets/images/interrogationMark.png";

export const NoProductFound: React.FC = () => {
  return (
    <View>
      <Image source={interrogrationMark} style={styles.interrogationMark} />
      <Typography type="paragraph" style={styles.noProductFoundText}> Item não encontrado </Typography>
      <Typography type="paragraph" style={styles.noProductText}> Tente procurar por um termo mais genério ou olhe outros produtos </Typography>
    </View>
  );
};
