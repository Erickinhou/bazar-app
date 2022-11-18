import { ParamListBase } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
}

export interface NavigationProps
  extends NativeStackNavigationProp<RootStackParamList> {}

export interface ScreenType<T extends keyof RootStackParamList>
  extends NativeStackScreenProps<RootStackParamList, T> {}
