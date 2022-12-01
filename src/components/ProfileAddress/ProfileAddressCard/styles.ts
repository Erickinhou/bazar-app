import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPalette.white,
        borderWidth: 1,
        borderColor: colorPalette.lightGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
    },
    addressTitle: {
        fontWeight: "bold",
        fontStyle: "italic",
    },
});    