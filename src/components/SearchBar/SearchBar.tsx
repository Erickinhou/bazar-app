import { useState } from 'react';
import { Text, View } from "react-native";

import { styles } from './styles';
import { Input } from "../Input";

import { useSearch } from '../../context/search';
import { Typography } from '../Typography';

export const SearchBar: React.FC = () => {

    const [open, setOpen] = useState(false);
    const [disable, setDisable] = useState(false);
    const search = useSearch();

    const handleSearch = (text: string) => {
        search[0] = text;
        console.log(search);
    }

    return (
        <>
            {open ? (
                <View style={styles.container}>
                    <Input 
                        style={styles.textInput} 
                        type='string' 
                        setForm={handleSearch} 
                        setDisabled={setDisable} 
                        placeholder='Pesquisar'
                    />
                    <Typography type='paragraph' children='X' onPress={() => setOpen(false)}/>
                </View>
            ) : (
                <Text onPress={() => setOpen(true)}>Search</Text>
            )}
        </>
    )
}