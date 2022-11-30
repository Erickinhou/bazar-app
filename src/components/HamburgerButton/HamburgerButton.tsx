import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import hamburgerIcon from "../../../assets/images/hamburgerIcon.png";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {}

export const HamburgerButton: React.FC<Props> = ({ ...props }) => {

  const navigation = useNavigation();

  const handleNavigation = () => {
    console.log("click Hamburger")
    // navigation.openDrawer();
  };

  return (
    <>
      <TouchableOpacity onPress={() => handleNavigation()}>
        <Image source={hamburgerIcon} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};
