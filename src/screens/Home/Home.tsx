import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import topSpot from "../../../assets/images/topSpot.png";
import bazarGf from "../../../assets/images/bazarGf.png";
import girlSmiling from "../../../assets/images/girlSmiling.png";
import { Button } from "../../components/CustomButton";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.topSpot} source={topSpot} />
      <Image style={styles.bazarGf} source={bazarGf} />
      <Image style={styles.girlSmiling} source={girlSmiling} />
      <View style={styles.button}>
        <Button text="Vamos nessa!" type="primary" />
      </View>
    </View>
  );
};
