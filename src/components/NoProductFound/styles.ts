import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  noProductFoundText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  noProductText: {
    color: "black",
    fontStyle: "normal",
    textAlign: "center",
  },
});
