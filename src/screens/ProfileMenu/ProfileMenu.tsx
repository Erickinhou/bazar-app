import { Pressable, PressableProps, Text, View } from "react-native";
import { ScreenType } from "../../navigation/types";
import { ProfileButton } from "../../components/ProfileButton";
import { styles } from "./styles";

type Props = ScreenType<"Profile">;

const menu = [
  {
    title: "Editar Perfil",
    navigateTo: "Login",
  },
  {
    title: "Endereço",
    navigateTo: "Login",
  },
  {
    title: "Pedidos",
    navigateTo: "Login",
  },
];

export const ProfileMenu: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {menu.map((option) => (
          <ProfileButton key={option.title} option={option} />
        ))}
      </View>
    </View>
  );
};
