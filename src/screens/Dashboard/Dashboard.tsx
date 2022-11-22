import { View } from "react-native";
import { ProductSlide } from "../../components/ProductSlide";
import { Typography } from "../../components/Typography";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";

type Props = ScreenType<"Dashboard">;

export const Dashboard: React.FC<Props> = () => {
  return (
    <>
      <View style={styles.container}>
        <Typography style={styles.title} type="title">
          Escolha os melhores Produtos!
        </Typography>
        <ProductSlide />
      </View>
    </>
  );
};
