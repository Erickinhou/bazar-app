import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export const DrawerContent = (props: T) => {
    return (
        <DrawerContentScrollView>
            <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate("Home")}
            />
        </DrawerContentScrollView>
    );
}