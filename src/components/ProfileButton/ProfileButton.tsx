import { Image, Pressable, PressableProps, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Typography } from "../Typography";

import arrowLeftIcon from "../.././../assets/images/arrowLeftIcon.png";

import { styles } from "./styles";
import { NavigationProps } from "../../navigation/types";

interface Props extends PressableProps {
  option: {
    title: string;
    navigateTo: string;
  };
}

export const ProfileButton: React.FC<Props> = ({ option, ...rest }) => {
  const navigation = useNavigation<NavigationProps>();

  const handleClick = () => {
    navigation.navigate(option.navigateTo);
  };
  return (
    <View style={styles.container}>
      <Pressable onPressIn={handleClick} style={styles.button} {...rest}>
        <Typography type="paragraph" style={styles.text}>
          {option.title}
        </Typography>
        <Image style={styles.icon} source={arrowLeftIcon} />
      </Pressable>
    </View>
  );
};
