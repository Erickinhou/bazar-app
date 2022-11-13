import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  pressable: {
    flex: 0.6,
    marginHorizontal: "auto",
    padding: 10,
    borderRadius: 20,
  },
  primary: {
    color: colorPalette.backgroundWhite,
    backgroundColor: colorPalette.primary,
  },
  text: {
    textAlign: "center",
  },
  primaryText: {
    color: colorPalette.backgroundWhite,
  },
});
