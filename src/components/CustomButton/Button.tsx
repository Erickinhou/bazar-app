import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

interface ButtonI {
  type: "primary" | "secondary";
  text: string;
}

export const Button: React.FC<ButtonI> = ({ type = "primary", text }) => {
  const getPressableStyles = () => {
    return { ...styles.pressable, ...styles[`${type}`] };
  };
  const getTextStyles = () => {
    return { ...styles.text, ...styles[`${type}Text`] };
  };
  return (
    <View style={styles.container}>
      <Pressable style={getPressableStyles()}>
        <Text style={getTextStyles()}>{text}</Text>
      </Pressable>
    </View>
  );
};
