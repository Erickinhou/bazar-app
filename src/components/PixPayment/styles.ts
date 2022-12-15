import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    color: colorPalette.primary,
  },
  subtitle: {
    marginTop: 10,
    textAlign: "center",
  },
  qrCode: {
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: colorPalette.white,
  },
  copyButton: {
    padding: 10,
    flexDirection: "row",
  },
  copyButtonIcon: {
    tintColor: colorPalette.mediumLight,
    width: 24,
    height: 24,
  },
  copyButtonText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: colorPalette.mediumLight,
    textAlignVertical: "center",
  },
});
