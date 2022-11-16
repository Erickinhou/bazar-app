import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: colorPalette.mediumLight,
    textAlignVertical: "center",
  },
});
