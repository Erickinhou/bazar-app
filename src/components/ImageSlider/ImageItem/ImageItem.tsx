import { Animated, Image, ListRenderItem, View } from "react-native";
import { SIDECARD_LENGTH, SPACING } from "../constants";
import { styles } from "./styles";

export const ImageItem: ListRenderItem<string> = ({ item, index }) => {
  return (
    <Animated.View
      style={[
        styles.imageContainer,
        {
          marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
        },
      ]}
    >
      <Image source={{ uri: item }} resizeMode="cover" style={styles.image} />
    </Animated.View>
  );
};
