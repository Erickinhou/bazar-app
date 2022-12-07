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
    width: 24,
    tintColor: colorPalette.mediumLight,
    height: 24,
  },
  text: {
    color: colorPalette.mediumLight,
    textAlignVertical: "center",
    fontFamily: "Raleway_400Regular",
  },
});
