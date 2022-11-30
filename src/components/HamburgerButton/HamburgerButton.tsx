import { DrawerActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";

import hamburgerIcon from "../../../assets/images/hamburgerIcon.png";
import { RootStackParamList } from "../../navigation/types";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {}

export const HamburgerButton: React.FC<Props> = ({ ...props }) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
