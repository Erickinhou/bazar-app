import { colorPalette } from "../theme/colors";

export const clearHeaderOptions = {
  headerBackVisible: false,
  headerTitle: "",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colorPalette.backgroundWhite,
  },
};

export const tabStyleOptions = {
  headerShown: false,
  tabBarActiveTintColor: colorPalette.primary,
  tabBarInactiveTintColor: colorPalette.mediumLight,

  tabBarStyle: {
    backgroundColor: colorPalette.backgroundWhite,
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: 0,
  },
};

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
