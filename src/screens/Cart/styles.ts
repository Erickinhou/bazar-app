import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: "center",
  },
});