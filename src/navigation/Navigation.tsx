import React, { useEffect } from "react";
import Animated, { Adaptable, color } from "react-native-reanimated";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";

import { HeaderIconProps, RootStackParamList } from "./types";
import { colorPalette } from "../theme/colors";
import homeIcon from "../../assets/images/homeIcon.png";
import buyIcon from "../../assets/images/buyIcon.png";
import profileIcon from "../../assets/images/profileIcon.png";

import { HamburgerButton } from "../components/HamburgerButton";
import { SearchBar } from "../components/Search/SearchBar";
import { SearchButton } from "../components/Search/SearchButton";
import { DrawerContent } from "../components/DrawerContent";
import { Dashboard } from "../screens/Dashboard";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { ProfileMenu } from "../screens/ProfileMenu";
import { Profile } from "../screens/Profile";
import { Search } from "../screens/Search";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const clearHeaderOptions = {
  headerBackVisible: false,
  headerTitle: "",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colorPalette.backgroundWhite,
  },
};

const tabStyleOptions = {
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

const HeaderIcon = (props: HeaderIconProps) => (
  <Image
    source={props.source}
    style={{
      tintColor: props.focused
        ? colorPalette.primary
        : colorPalette.mediumLight,
      width: 24,
      height: 24,
    }}
  />
);

const DashboardTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          ...tabStyleOptions,
          tabBarIcon: (props) => <HeaderIcon source={homeIcon} {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          ...tabStyleOptions,
          tabBarIcon: (props) => <HeaderIcon source={profileIcon} {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Dashboard}
        options={{
          ...tabStyleOptions,
          tabBarIcon: (props) => <HeaderIcon source={buyIcon} {...props} />,
        }}
      />
    </Tab.Navigator>

  );
};

const StackScreen = (props: T) => {
  const isDrawer = useDrawerStatus() === "open";
  const progress: any = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 40],
  });
  const animatedStyles = { borderRadius, transform: [{ scale }] };

  return (
    <Animated.View 
      style={[
        { flex: 1 }, 
        isDrawer ? { borderWidth: 15, borderColor: colorPalette.backgroundWhite } : null,
        animatedStyles
      ]}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="DashboardTabs"
          component={DashboardTabs}
          options={{
            ...clearHeaderOptions,
            headerLeft: () => <HamburgerButton />,
            headerRight: () => <SearchButton />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Registro de conta nova",
            headerStyle: { backgroundColor: colorPalette.primary },
            headerTintColor: colorPalette.backgroundWhite,
          }}
        />
        <Stack.Screen
          name="ProfileMenu"
          component={ProfileMenu}
          options={{
            headerShadowVisible: false,
            title: "Meu Perfil",
            headerStyle: {
              backgroundColor: colorPalette.backgroundWhite,
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            ...clearHeaderOptions,
            headerTitle: () => <SearchBar />,
          }}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
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
      }}
      useLegacyImplementation
      drawerContent={(props: T) => {
        return <DrawerContent {...props} />
      }}

    >
      <Drawer.Screen name="Screens">
        {props => <StackScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

//Todo create private route
export const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
};
