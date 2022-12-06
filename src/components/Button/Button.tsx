import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

interface Props extends PressableProps {
  type?: "primary";
  text: string;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<Props> = ({
  type = "primary",
  text,
  style,
  ...props
}) => {
  const getPressableStyles = () => {
    const buttonCustomStyles = props.disabled
      ? { ...styles[`${type}`], opacity: 0.5 }
      : styles[`${type}`];

    return { ...styles.pressable, ...buttonCustomStyles };
  };
  const getTextStyles = () => {
    return { ...styles.text, ...styles[`${type}Text`] };
  };
  return (
    <View style={[styles.container, style]}>
      <Pressable {...props} style={getPressableStyles()}>
        <Text style={getTextStyles()}>{text}</Text>
      </Pressable>
    </View>
  );
};
