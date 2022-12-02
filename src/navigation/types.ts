import { ParamListBase } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";

export interface HeaderIconProps {
  focused: boolean;
  color?: string;
  size?: number;
  source: ImageSourcePropType;
}

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ProfileAddress: undefined;
  ProfileMenu: undefined;
  Profile: undefined;
  Dashboard: undefined;
}

export interface NavigationProps
  extends NativeStackNavigationProp<RootStackParamList> {}

export interface ScreenType<T extends keyof RootStackParamList>
  extends NativeStackScreenProps<RootStackParamList, T> {}
