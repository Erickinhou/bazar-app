import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
    paddingBottom: 16,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
});