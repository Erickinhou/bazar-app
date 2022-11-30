import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
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
    textAlign: "center",
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
