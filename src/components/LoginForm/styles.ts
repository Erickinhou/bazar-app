import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },
  containerInput: {
    marginBottom: 30,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: colorPalette.mediumLight,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  },
  createAccount: {
    marginTop: 10,
  },
});
