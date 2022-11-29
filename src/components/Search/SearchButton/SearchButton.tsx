import { Image, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";

import searchIcon from '../../../../assets/images/searchIcon.png';

export const SearchButton: React.FC = ({  }) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleButtonClick = () => {
        navigation.navigate("Search");
    }

    return (
        <>
            <TouchableOpacity onPress={() => handleButtonClick()}>
                <Image source={searchIcon} style={styles.searchIcon} />
            </TouchableOpacity>
        </>
    )
}