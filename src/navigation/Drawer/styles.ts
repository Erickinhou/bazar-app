import { colorPalette } from "../../theme/colors";

export const drawerStyleOptions = {
  headerShown: false,
  swipeEnabled: false,
  drawerType: "slide",
  overlayColor: "transparent",
  drawerActiveBackgroundColor: colorPalette.primary,
  drawerActiveTintColor: colorPalette.backgroundWhite,
  drawerInactiveTintColor: colorPalette.backgroundWhite,
  drawerStyle: {
    backgroundColor: colorPalette.primary,
    width: "55%",
  },
  drawerContentContainerStyle: {
    flex: 1,
  },
  sceneContainerStyle: {
    backgroundColor: colorPalette.primary,
  },
};
