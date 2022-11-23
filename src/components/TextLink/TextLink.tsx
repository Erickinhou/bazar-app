import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { ColorPalette, colorPalette } from "../../theme/colors";

interface Props extends PressableProps {
  type?: "primary" | "secondary";
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  theme?: keyof ColorPalette;
  fontSize?: number;
  children?: React.ReactNode;
}

export const TextLink: React.FC<Props> = ({
  type = "primary",
  textAlign,
  theme,
  children,
  fontSize,
  ...props
}) => {
  const getTextStyles = () => {
    const color = colorPalette[theme];
    return { textAlign, color, fontSize };
  };
  return (
    <Pressable {...props}>
      <Text style={getTextStyles()}>{children}</Text>
    </Pressable>
  );
};
