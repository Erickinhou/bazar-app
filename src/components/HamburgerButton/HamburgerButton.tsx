import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import hamburgerIcon from "../../../assets/images/hamburgerIcon.png";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {}

export const HamburgerButton: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <TouchableOpacity onPress={() => console.log("click Hamburger")}>
        <Image source={hamburgerIcon} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};
