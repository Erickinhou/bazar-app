import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colorPalette.backgroundWhite,
    padding: 20,
  },
  button: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
});
