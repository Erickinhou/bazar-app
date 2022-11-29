import { Image, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";

import searchIcon from '../../../../assets/images/searchIcon.png';

interface Props {
    navigation: string;
}

export const SearchButton: React.FC<Props> = ({ navigation }) => {

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleButtonClick = () => {
        navigate.navigate(navigation);
    }

    return (
        <>
            <TouchableOpacity onPress={() => handleButtonClick()}>
                <Image source={searchIcon} style={styles.searchIcon} />
            </TouchableOpacity>
        </>
    )
}