import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
    paddingTop: 10,
  },
  containerNoProduct: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
