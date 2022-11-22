import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
  },
  text: {
    color: colorPalette.mediumLight,
    padding: 10,
  },
  selectedText: {
    color: colorPalette.primary,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colorPalette.primary,
  },
});
