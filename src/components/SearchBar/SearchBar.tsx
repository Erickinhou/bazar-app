import { useState } from 'react';
import { View, Image, TouchableOpacity } from "react-native";

import { useSearch } from '../../context/search';
import { colorPalette } from '../../theme/colors';
import { Input } from "../Input";
import { styles } from './styles';

import searchIcon from '../../../assets/images/searchIcon.png';
import arrow from '../../../assets/images/arrowLeftIcon.png'

export const SearchBar: React.FC = () => {

    const [open, setOpen] = useState(false);
    const [disable, setDisable] = useState(false);
    const [search, setSearch] = useSearch();

    const [borderColor, setBorderColor] = useState('#C9C9C9');

    const handleOnFocus = () => {
        setBorderColor(colorPalette.primary);
    }
    const handleOnBlur = () => {
        setBorderColor('#C9C9C9');
    }

    return (
        <>
            {open ? (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => setOpen(false)}>
                        <Image source={arrow} style={styles.arrowLeftIcon} />
                    </TouchableOpacity>
                    <View style={[styles.textView, { borderColor: borderColor }]} >
                        <Image source={searchIcon} style={styles.searchInputIcon} />
                        <Input
                            style={styles.textInput}
                            type='string'
                            setForm={setSearch}
                            setDisabled={setDisable}
                            placeholder='Pesquisar'
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                        />
                    </View>
                </View>
            ) : (
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Image source={searchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
            )}
        </>
    )
}