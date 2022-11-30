import { useState } from "react";
import { View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";

import { useSearch } from "../../../context/search";
import { colorPalette } from "../../../theme/colors";
import { Input } from "../../Input";
import { styles } from "./styles";

import searchIcon from "../../../../assets/images/searchIcon.png";
import arrow from "../../../../assets/images/arrowLeftIcon.png";

export const SearchBar: React.FC = () => {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [disable, setDisable] = useState(false);
  const [borderColor, setBorderColor] = useState(colorPalette.lightGray);
  const [search, setSearch] = useSearch();

  const handleArrowClick = () => {
    navigate.goBack();
  };

  const handleOnFocus = () => {
    setBorderColor(colorPalette.primary);
  };
  const handleOnBlur = () => {
    setBorderColor(colorPalette.lightGray);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleArrowClick()}>
          <Image source={arrow} style={styles.arrowLeftIcon} />
        </TouchableOpacity>
        <View style={[styles.textView, { borderColor: borderColor }]}>
          <Image source={searchIcon} style={styles.searchInputIcon} />
          <Input
            style={styles.textInput}
            type="string"
            onChangeInput={({ value }) => setSearch(value)}
            setDisabled={setDisable}
            placeholder="Pesquisar"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </View>
      </View>
    </>
  );
};
