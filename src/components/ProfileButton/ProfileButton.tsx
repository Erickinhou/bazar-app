import { Image, Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import arrowLeftIcon from "../.././../assets/images/arrowLeftIcon.png";
import { Typography } from "../Typography";

interface Props extends PressableProps {
  option: {
    title: string;
    navigateTo: string;
  };
}

export const ProfileButton: React.FC<Props> = ({ option, ...rest }) => {
  const handleClick = () => {
    console.log(option.navigateTo);
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
