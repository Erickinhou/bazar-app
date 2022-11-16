import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";

interface Props extends PressableProps {
  type?: "primary" | "secondary";
  text: string;
}

export const Button: React.FC<Props> = ({
  type = "primary",
  text,
  ...props
}) => {
  const getPressableStyles = () => {
    return { ...styles.pressable, ...styles[`${type}`] };
  };
  const getTextStyles = () => {
    return { ...styles.text, ...styles[`${type}Text`] };
  };
  return (
    <View style={styles.container}>
      <Pressable style={getPressableStyles()} {...props}>
        <Text style={getTextStyles()}>{text}</Text>
      </Pressable>
    </View>
  );
};
