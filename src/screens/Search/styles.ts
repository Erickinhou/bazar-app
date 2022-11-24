import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
    padding: 20,
  },
  noProductContainer: {
    flex: 1,
  },
  noProductHeaderTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  noProductFoundText: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  noProductText: {
    color: "black",
    fontSize: 17,
    fontStyle: "normal",
    textAlign: "center",
  },
  interrogationMark: {
    fontSize: 96,
    fontStyle: "normal",
    textAlign: "center",
    color: colorPalette.primary,
  },
});
