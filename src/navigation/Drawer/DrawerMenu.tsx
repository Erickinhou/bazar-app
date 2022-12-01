import { createDrawerNavigator } from "@react-navigation/drawer";

import { drawerStyleOptions } from "./styles";
import { DrawerContent } from "../../components/DrawerContent";

import { AnimatedDrawerView } from "../AnimatedDrawerView";
import { StackScreen } from "../StackScreen";

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={drawerStyleOptions}
      useLegacyImplementation
      drawerContent={(props: T) => {
        return <DrawerContent {...props} />
      }}
    >
      <Drawer.Screen name="Screens">
        {props => (
          <AnimatedDrawerView>
            <StackScreen />
          </AnimatedDrawerView>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};