import { View } from "react-native";

import { Button } from "../../Button";
import { Typography } from "../../Typography";

import { Address } from "../../../screens/ProfileAddress";

import { styles } from "./styles";

interface Props {
    index: number;
    address: Address;
}

export const ProfileAddressCard: React.FC<Props> = ({ index, address }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Typography type={"paragraph"} style={styles.addressTitle}>
                    {""}
                    Endereco {index + 1}:{""}
                </Typography>
                <Typography type={"paragraph"}>
                    {""}
                    {address.street}{""}
                </Typography>
                <Typography type={"paragraph"}>
                    {""}
                    Numero: {address.number}, {address.complement} {""}
                </Typography>
                <Typography type={"paragraph"}>
                    {""}
                    CEP: {address.cep} - {address.district} {""}
                </Typography>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={{ height: 40, width: 90 }}>
                    <Button text={"Editar"} />
                </View>
            </View>
        </View>
    );
};