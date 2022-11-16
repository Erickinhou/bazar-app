import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pressable: {
    flex: 0.6,
    padding: 10,
    borderRadius: 10,
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
