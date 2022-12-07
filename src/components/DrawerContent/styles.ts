import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconGF: {
    width: 150,
    height: 150,
  },
  iconDrawerItem: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: colorPalette.white,
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderBottomColor: colorPalette.white,
    paddingVertical: 5,
  },
  drawerItemLabel: {
    color: colorPalette.white,
    marginLeft: -20
  },
});
