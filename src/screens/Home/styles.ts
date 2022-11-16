import { StyleSheet } from "react-native";
import { colorPalette } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.backgroundWhite,
  },
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  topSpot: {
    position: "absolute",
    top: 0,
    right: -80,
    width: 310,
    height: 210,
  },
  bazarGf: {
    position: "absolute",
    top: 250,
    width: 320,
    height: 81,
    alignSelf: "center",
  },
  girlSmiling: {
    position: "absolute",
    bottom: 0,
    width: 309,
    height: 300,
    alignSelf: "center",
  },
});
