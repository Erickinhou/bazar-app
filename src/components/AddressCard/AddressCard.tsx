import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import profileIcon from "../../../assets/images/profileIcon.png";
import phoneIcon from "../../../assets/images/phoneIcon.png";
import locationIcon from "../../../assets/images/locationIcon.png";
import { useUser } from "../../context/user";
import { api } from "../../service";
import { AddressI } from "../ProfileAddress/ProfileAddressForm";
import { TextLink } from "../TextLink";
import { Typography } from "../Typography";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../navigation/types";
import { Button } from "../Button";

interface Props {}

export const AddressCard: React.FC<Props> = () => {
  const [user] = useUser();
  const [address, setAddress] = useState<AddressI>();
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    getAddress();
  }, [user]);

  const getAddress = async () => {
    const { data: addressData } = await api.get(
      `/address/${user?.defaultAddress}`
    );
    setAddress(addressData);
  };

  const navigateToAddress = () => {
    navigation.navigate("ProfileAddress");
  };

  const concatAddress = ({ street, number, district }: AddressI) =>
    `${street} ${number} - ${district}`;

  return (
    <>
      <View style={styles.titleContainer}>
        <Typography type="largeParagraph"> Endereço</Typography>
        <TextLink theme="primary" onPress={navigateToAddress}>
          Mudar
        </TextLink>
      </View>
      {address ? (
        <View style={styles.addressContainer}>
          <View style={styles.fieldContainer}>
            <Image style={styles.icon} source={profileIcon} />
            <Typography type="paragraph" style={styles.fieldTextContainer}>
              {user.name}
            </Typography>
          </View>
          <View style={styles.fieldContainer}>
            <Image style={styles.icon} source={locationIcon} />
            <Typography type="paragraph" style={styles.fieldTextContainer}>
              {concatAddress(address)}
            </Typography>
          </View>
          <View style={styles.fieldContainer}>
            <Image style={styles.icon} source={phoneIcon} />
            <Typography type="paragraph" style={styles.fieldTextContainer}>
              {user.phone}
            </Typography>
          </View>
        </View>
      ) : (
        <Button
          text="Adicionar Endereço"
          style={styles.addAddressButton}
          onPress={navigateToAddress}
        />
      )}
    </>
  );
};
