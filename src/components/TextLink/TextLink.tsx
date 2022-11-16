import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
} from "react-native";
import { styles } from "./ styles";

interface Props extends PressableProps {
  type?: "primary" | "secondary";
  text: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
}

export const TextLink: React.FC<Props> = ({
  text,
  type = "primary",
  textAlign,
  ...props
}) => {
  const getTextStyles = () => {
    return { ...styles[`${type}Text`], textAlign };
  };
  return (
    <Pressable {...props}>
      <Text style={getTextStyles()}>{text}</Text>
    </Pressable>
  );
};
