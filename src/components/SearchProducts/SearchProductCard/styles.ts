import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
  productCardContainer: {
    width: 150,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorPalette.white,
    borderRadius: 20,
    padding: 10,
    marginRight: 20,
    shadowColor: colorPalette.dark,
  },
  thumbnail: {
    height: 75,
    width: 75,
    borderRadius: 90,
    resizeMode: "contain",
  },
  productTitle: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
  },
  productDescription: {
    textAlign: "center",
    fontSize: 10,
    color: colorPalette.mediumLight,
    marginTop: 10,
  },
  productPrice: {
    textAlign: "center",
    color: colorPalette.primary,
    marginTop: 10,
  },
});
