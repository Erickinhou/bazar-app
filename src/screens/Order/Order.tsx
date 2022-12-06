import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { View } from "react-native";
import { AddressCard } from "../../components/AddressCard";
import { Button } from "../../components/Button";
import { PaymentMethod } from "../../components/PaymentMethod";
import { useUser } from "../../context/user";
import { NavigationProps, ScreenType } from "../../navigation/types";
import { styles } from "./styles";

export interface OrderI {
  userId: string;
  paymentMethod: "pix" | "local";
  status: "processing" | "paid" | "local_receive" | "complete";
  address: {
    id: string;
  };
}

type Props = ScreenType<"Order">;

export const Order: React.FC<Props> = () => {
  const [user] = useUser();
  const [order, setOrder] = useState<Partial<OrderI>>({
    paymentMethod: "pix",
    address: { id: user.defaultAddress },
  });
  const navigation = useNavigation<NavigationProps>();

  const changePaymentMethod = (paymentMethod: "pix" | "local") => {
    setOrder((prev) => {
      return { ...prev, paymentMethod };
    });
  };

  const handleConfirmOrder = () => {
    // Todo create Pix Payment
    if (order.paymentMethod === "local") {
      navigation.navigate("DashboardTabs");
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Pedido concluido com sucesso",
      });
    }
    if (order.paymentMethod === "pix") {
      navigation.navigate("Pix");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <AddressCard />
        <PaymentMethod
          order={order}
          changePaymentMethod={changePaymentMethod}
        />
      </View>
      <Button
        style={styles.button}
        text="Corfimar Pedido"
        onPress={handleConfirmOrder}
      />
    </>
  );
};
