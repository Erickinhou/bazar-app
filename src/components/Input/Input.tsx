import { useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Typography } from "../Typography";
import { styles } from "./styles";

export interface InputDataChangeProps {
  value: string;
  type: string;
}
interface Props extends TextInputProps {
  type: string;
  validation?: (value: string) => {
    error?: string | undefined | null;
    result: string;
  };
  onChangeInput: (props: InputDataChangeProps) => void;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Input: React.FC<Props> = ({
  value,
  type,
  onChangeInput,
  validation,
  setDisabled,
  ...props
}) => {
  const [error, setError] = useState("");
  const handleChange = (changedValue: string) => {
    setDisabled(false);
    let newValue = changedValue;
    if (validation) {
      const { error, result } = validation(newValue);
      handleError(error);
      newValue = result;
    }
    onChangeInput({ value: newValue, type });
  };

  const handleError = (error: string) => {
    if (error) {
      setDisabled(true);
      return setError(error);
    }
    setError("");
  };

  return (
    <View>
      <TextInput
        style={[styles.textInput, styles.defaultFont]}
        value={value}
        onChangeText={handleChange}
        {...props}
      />
      {error && (
        <Typography type="paragraph" style={[styles.textError, styles.defaultFont]}>
          {error}
        </Typography>
      )}
    </View>
  );
};
