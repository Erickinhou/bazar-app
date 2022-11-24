import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HamburgerButton } from "../components/HamburgerButton";
import { SearchBar } from "../components/SearchBar";
import { SearchButton } from "../components/SearchButton";
import { Dashboard } from "../screens/Dashboard";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Search } from "../screens/Search";
import { colorPalette } from "../theme/colors";
import { RootStackParamList } from "./types";

const clearHeaderOptions = {
  headerBackVisible: false,
  headerTitle: "",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colorPalette.backgroundWhite,
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//Todo create private route
export const Navigation = () => {
  return (
    <NavigationContainer>
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
          name="Dashboard"
          component={Dashboard}
          options={{
            ...clearHeaderOptions,
            headerLeft: () => <HamburgerButton />,
            headerRight: () => <SearchButton navigation={"Search"} />,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            ...clearHeaderOptions,
            headerLeft: () => <SearchBar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
