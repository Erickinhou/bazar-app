import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.primary,
  },
  formContainer: {
    flex: 2,
    borderTopStartRadius: 20,
    borderRadiusTop: 20,
    borderTopEndRadius: 20,
    backgroundColor: colorPalette.backgroundWhite,
  },
});
