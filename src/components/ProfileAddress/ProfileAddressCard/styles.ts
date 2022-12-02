import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: "20%",
        flexDirection: "row",
        backgroundColor: colorPalette.white,
        borderWidth: 1,
        borderColor: colorPalette.lightGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
    },
    infoContainer: {
        flex: 3,
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "center",
    },
    button: {
        width: 140,
        marginVertical: 5,
    },
    addressTitle: {
        fontWeight: "bold",
        fontStyle: "italic",
    },
});    