import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
    marginTop: 10,
  },
  textView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
  textInput: {
    minWidth: "100%",
    marginHorizontal: 10,
    overflow: "scroll",
    fontSize: 12,
  },
  searchInputIcon: {
    width: 15,
    height: 15,
  },
  arrowLeftIcon: {
    width: 15,
    height: 10,
    marginRight: 10,
  },
});
