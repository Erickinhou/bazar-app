import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 15,
    backgroundColor: colorPalette.white,
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    textAlignVertical: "center",
  },
});
