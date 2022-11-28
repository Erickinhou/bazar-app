import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
  interrogationMark: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  noProductFoundText: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  noProductText: {
    color: "black",
    fontSize: 17,
    fontStyle: "normal",
    textAlign: "center",
  },
});
