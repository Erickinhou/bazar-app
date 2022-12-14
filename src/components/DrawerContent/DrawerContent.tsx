import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { styles } from "./styles";
import { BUTTONS } from "./buttons";

import { NavigationProps } from "../../navigation/types";
import iconGerandoFalcoes from "../../../assets/images/iconGerandoFalcoes.png";

interface Props extends DrawerContentComponentProps {}

export const DrawerContent: React.FC<Props> = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View>
          <Image source={iconGerandoFalcoes} style={styles.iconGF} />
        </View>
        {BUTTONS.map((button, index) => (
          <DrawerItem
            key={index}
            label={button.label}
            icon={() => (
              <Image source={button.icon} style={styles.iconDrawerItem} />
            )}
            onPress={() => navigation.navigate(button.navigateTo)}
            style={styles.drawerItem}
            labelStyle={styles.drawerItemLabel}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
};
