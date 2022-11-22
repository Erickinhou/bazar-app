import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
  productCardContainer: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorPalette.white,
    borderRadius: 20,
    padding: 10,
    marginRight: 20,
    marginBottom: 10,
    shadowColor: colorPalette.dark,
  },
  thumbnail: {
    height: 150,
    width: 150,
    borderRadius: 90,
    resizeMode: "center",
  },
  productTitle: {
    textAlign: "center",
    marginTop: 10,
  },
  productDescription: {
    textAlign: "center",
    color: colorPalette.mediumLight,
    marginTop: 10,
  },
  productPrice: {
    textAlign: "center",
    color: colorPalette.primary,
    marginTop: 10,
  },
});
