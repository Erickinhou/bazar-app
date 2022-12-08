import { Text, TextProps } from "react-native";
import { styles } from "./styles";

interface Props extends TextProps {
  type: "title" | "paragraph" | "subtitle" | "largeParagraph";
  children?: React.ReactNode;
}

export const Typography: React.FC<Props> = ({ type, children, ...props }) => {
  return (
    <Text {...props} style={[styles[type], styles.defaultText, props.style]}>
      {children}
    </Text>
  );
};
