import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 20,
    backgroundColor: colorPalette.white,
  },
  fieldContainer: {
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colorPalette.mediumLight,
  },
  fieldTextContainer: {
    color: colorPalette.mediumLight,
    textAlignVertical: "center",
    marginLeft: 10,
  },
  addAddressButton: {
    marginVertical: 30,
  },
});
