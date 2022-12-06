import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPalette.white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colorPalette.lightGray,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        alignContent: "center",
        justifyContent: "center",
    },
});