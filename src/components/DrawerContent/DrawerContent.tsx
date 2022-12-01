import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Image } from "react-native";

import { styles } from "./styles";
import { buttons } from "./buttons";

import iconGerandoFalcoes from "../../../assets/images/iconGerandoFalcoes.png";

export const DrawerContent: React.FC = (props: T) => {
    return (
        <DrawerContentScrollView {...props} >
            <View
                style={styles.container}
            >
                <View>
                    <Image source={iconGerandoFalcoes} style={styles.iconGF} />
                </View>
                {buttons.map((button, index) => (
                    <DrawerItem
                        key={index}
                        label={button.label}
                        icon={() => <Image source={button.icon} style={styles.iconDrawerItem} />}
                        onPress={() => props.navigation.navigate(button.navigateTo)}
                        style={styles.drawerItem}
                        labelStyle={styles.drawerItemLabel}
                    />
                ))}
            </View>
        </DrawerContentScrollView>
    );
}