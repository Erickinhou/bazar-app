import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        padding: 10,
    },
    textView: {
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
    },
    textInput: {
        minWidth: "90%",
        maxWidth: "90%",
        marginHorizontal: 10,
        overflow: "scroll",
        fontSize: 12,
    },
    searchIcon: {
        width: 18,
        height: 18,
    },
    searchInputIcon: {
        width: 15,
        height: 15,
    },
    arrowLeftIcon: {
        width: 15,
        height: 10,
        marginRight: 10,
    }
});