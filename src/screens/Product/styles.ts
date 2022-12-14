import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
  },
  productDetailsContainer: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadiusTop: 20,
    backgroundColor: colorPalette.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  description: {
    paddingVertical: 10,
    color: colorPalette.mediumLight,
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    color: colorPalette.primary,
  },
});
