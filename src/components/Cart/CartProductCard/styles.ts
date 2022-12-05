import { StyleSheet } from "react-native";
import { colorPalette } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPalette.white,
        marginHorizontal: 16,
        marginVertical: 4,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colorPalette.lightGray,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    imageContainer: {
        width: 80,
        height: 80,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colorPalette.black,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: colorPalette.primary,
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    amountButton: {
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: colorPalette.secondary,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
    },
    amountButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colorPalette.white,
        alignSelf: "center",
    },
    deleteIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
});