import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "10%",
    flexDirection: "row",
    backgroundColor: colorPalette.white,
    borderWidth: 1,
    borderColor: colorPalette.lightGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  isActive: {
    borderWidth: 1,
    borderColor: colorPalette.primary,
  },
  infoContainer: {
    flex: 3,
    flexWrap: "wrap",
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 140,
    marginVertical: 5,
  },
  addressTitle: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
