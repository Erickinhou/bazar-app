import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { colorPalette } from "../theme/colors";

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Login: undefined;
  Register: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
