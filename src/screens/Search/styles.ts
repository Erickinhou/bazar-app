import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
    padding: 20,
    diplay: "grid"
  },
  productFoundText: {
    textAlign: "center",
  },
  productListContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 10,
  },
  containerNoProduct: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  interrogationMark: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  noProductFoundText: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  noProductText: {
    color: "black",
    fontSize: 17,
    fontStyle: "normal",
    textAlign: "center",
  },
});
