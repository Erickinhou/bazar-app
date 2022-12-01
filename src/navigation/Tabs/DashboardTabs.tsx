import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Profile } from "../../screens/Profile";
import { Dashboard } from "../../screens/Dashboard";

import homeIcon from "../../../assets/images/homeIcon.png";
import buyIcon from "../../../assets/images/buyIcon.png";
import profileIcon from "../../../assets/images/profileIcon.png";

import { colorPalette } from "../../theme/colors";
import { tabStyleOptions } from "./styles";
import { HeaderIconProps } from "../types";

const Tab = createBottomTabNavigator();

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

export const DashboardTabs = () => {
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