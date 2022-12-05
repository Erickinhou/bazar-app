import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    backgroundColor: colorPalette.mediumLight,
    borderRadius: 30,
  },
  indicatorActive: {
    width: 10,
    height: 10,
    backgroundColor: colorPalette.primary,
    borderRadius: 30,
  },
  borderOutside: {
    padding: 2,
    borderWidth: 1,
    borderColor: colorPalette.transparent,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  borderOutsideActive: {
    padding: 2,
    borderWidth: 1,
    borderColor: colorPalette.primary,
    borderRadius: 30,
    opacity: 1,
    marginHorizontal: 10,
  },
});
