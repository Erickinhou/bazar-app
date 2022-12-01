import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { api } from "../../service";
import { useUser } from "../../context/user";
import { ScreenType } from "../../navigation/types";

import { styles } from "./styles";
import { ProfileAddressList } from "../../components/ProfileAddres/ProfileAddressList";

type Props = ScreenType<"ProfileAddres">;

export interface Address {
  id: number;
  street: string;
  number: number;
  district: string;
  cep: string;
  complement: string;
}

export const ProfileAddress: React.FC<Props> = () => {

  const [user] = useUser();
  const [addresses, setAddresses] = React.useState<Address[]>();

  useEffect(() => {
    async function getAddress() {
      const { data } = await api.get("/addresses", {
        params: {
          filter: {
            userId: user?.id,
          },
        },
      });
      setAddresses(data);
    }
    getAddress();
  }, []);

  return (
    <View style={styles.container}>
      <ProfileAddressList addresses={addresses}/>
    </View>
  );
};
