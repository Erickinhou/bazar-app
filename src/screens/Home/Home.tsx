import { Image, View } from "react-native";
import { styles } from "./styles";
import topSpot from "../../../assets/images/topSpot.png";
import bazarGf from "../../../assets/images/bazarGf.png";
import girlSmiling from "../../../assets/images/girlSmiling.png";
import { Button } from "../../components/Button";
import { ScreenType } from "../../navigation/types";

type Props = ScreenType<"Home">;

export const Home: React.FC<Props> = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.topSpot} source={topSpot} />
      <Image style={styles.bazarGf} source={bazarGf} />
      <Image style={styles.girlSmiling} source={girlSmiling} />
      <View style={styles.button}>
        <Button text="Vamos nessa!" type="primary" onPressIn={handlePress} />
      </View>
    </View>
  );
};
