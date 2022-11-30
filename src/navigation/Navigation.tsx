import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HamburgerButton } from "../components/HamburgerButton";
import { SearchBar } from "../components/Search/SearchBar";
import { SearchButton } from "../components/Search/SearchButton";
import { Dashboard } from "../screens/Dashboard";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Search } from "../screens/Search";
import { colorPalette } from "../theme/colors";
import { HeaderIconProps, RootStackParamList } from "./types";
import homeIcon from "../../assets/images/homeIcon.png";
import buyIcon from "../../assets/images/buyIcon.png";
import profileIcon from "../../assets/images/profileIcon.png";
import { Image } from "react-native";

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
  tabBarInactiveTintColor: colorPalette.dark,

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
      tintColor: props.focused ? colorPalette.primary : colorPalette.dark,
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
        component={Dashboard}
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

export const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      initialRouteName="DashboardTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Perfil" component={DashboardTabs} />
      <Drawer.Screen name="Meus pedidos" component={DashboardTabs} />
      <Drawer.Screen name="Favoritos" component={DashboardTabs} />
      <Drawer.Screen name="Entrega" component={DashboardTabs} />
      <Drawer.Screen name="Pedidos" component={DashboardTabs} />
      <Drawer.Screen name="Sair" component={DashboardTabs} />
    </Drawer.Navigator>
  );
};

//Todo create private route
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{
            ...clearHeaderOptions,
            headerLeft: () => <HamburgerButton />,
            headerRight: () => <SearchButton />,
          }}
        />
        <Stack.Screen
          name="DashboardTabs"
          component={DashboardTabs}
          options={{ headerShown: false }}
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
          name="Search"
          component={Search}
          options={{
            ...clearHeaderOptions,
            headerTitle: () => <SearchBar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
