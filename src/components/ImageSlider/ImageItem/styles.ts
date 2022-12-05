import { StyleSheet } from "react-native";
import { CARD_LENGTH, SPACING } from "../constants";

export const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    width: CARD_LENGTH,
    marginHorizontal: SPACING,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
