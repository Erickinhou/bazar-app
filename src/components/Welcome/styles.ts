import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: colorPalette.primary,
  },
  text: {
    textAlign: "center",
    color: colorPalette.backgroundWhite,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
