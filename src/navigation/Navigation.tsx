import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { HamburgerButton } from "../components/HamburgerButton";
import { Dashboard } from "../screens/Dashboard";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
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
            headerSearchBarOptions: {
              placeholder: "nome do produto",
              onChangeText: (value) => {
                console.log("value ->", value.target);
              },
              hideNavigationBar: true,
              obscureBackground: true,
              onOpen: () => console.log("hit search"),
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
