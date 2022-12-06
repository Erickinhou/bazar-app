import { ParamListBase } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";
import { ProductI } from "../components/ProductSlide";

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
  ProfileOrders: undefined;
  Profile: undefined;
  Dashboard: undefined;
  Order: undefined;
  Product: { product: ProductI };
}

export interface NavigationProps
  extends NativeStackNavigationProp<RootStackParamList> {}

export interface ScreenType<T extends keyof RootStackParamList>
  extends NativeStackScreenProps<RootStackParamList, T> {}
