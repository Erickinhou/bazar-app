import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../screens/Home";
import { Login } from "../../screens/Login";
import { Register } from "../../screens/Register";
import { Profile } from "../../screens/Profile";
import { ProfileAddress } from "../../screens/ProfileAddress";
import { ProfileAddressForm } from "../../components/ProfileAddress/ProfileAddressForm";
import { ProfileMenu } from "../../screens/ProfileMenu";
import { Search } from "../../screens/Search";

import { HamburgerButton } from "../../components/HamburgerButton";
import { SearchBar } from "../../components/Search/SearchBar";
import { SearchButton } from "../../components/Search/SearchButton";

import { DashboardTabs } from "../Tabs";
import { RootStackParamList } from "../types";
import { colorPalette } from "../../theme/colors";
import { clearHeaderOptions } from "./styles";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackScreen = () => {
  return (
    <Stack.Navigator>
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
        name="DashboardTabs"
        component={DashboardTabs}
        options={{
          ...clearHeaderOptions,
          headerLeft: () => <HamburgerButton />,
          headerRight: () => <SearchButton />,
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
        name="Profile"
        component={Profile}
        options={{
          headerShadowVisible: false,
          title: "Meu Perfil",
          headerStyle: {
            backgroundColor: colorPalette.backgroundWhite,
          },
        }}
      />
      <Stack.Screen
        name="ProfileAddress"
        component={ProfileAddress}
        options={{
          headerShadowVisible: false,
          title: "Meus Endereços",
          headerStyle: {
            backgroundColor: colorPalette.backgroundWhite,
          },
        }}
      />
      <Stack.Screen
        name="ProfileAddressForm"
        component={ProfileAddressForm}
        options={{
          headerShadowVisible: false,
          title: "Meus Endereços",
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
  );
};