import { NavigationContainer } from "@react-navigation/native";

import { DrawerMenu } from "./Drawer";

//Todo create private route
export const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
};
