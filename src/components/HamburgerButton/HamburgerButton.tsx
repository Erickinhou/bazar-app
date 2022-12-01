import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { NavigationProps } from "../../navigation/types";
import hamburgerIcon from "../../../assets/images/hamburgerIcon.png";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps { }

export const HamburgerButton: React.FC<Props> = () => {

  const navigation = useNavigation<NavigationProps>();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <>
      <TouchableOpacity onPress={() => handleOpenDrawer()}>
        <Image source={hamburgerIcon} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};
