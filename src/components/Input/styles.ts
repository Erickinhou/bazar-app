import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: colorPalette.mediumLight,
  },
  textError: {
    marginTop: 5,
    color: colorPalette.danger,
  },
});
