import React, { useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { api } from "../../service";
import { NavigationProps, ScreenType } from "../../navigation/types";

import { AddressCard } from "../../components/AddressCard";
import { Button } from "../../components/Button";
import { PaymentMethod } from "../../components/PaymentMethod";
import { useUser } from "../../context/user";
import axios from "axios";

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
    userId: user.id,
    address: { id: user.defaultAddress },
  });
  const navigation = useNavigation<NavigationProps>();
  const { getItem } = useAsyncStorage("@cart");

  const changePaymentMethod = (paymentMethod: "pix" | "local") => {
    setOrder((prev) => {
      return { ...prev, paymentMethod };
    });
  };

  const handlePostOrder = async (status: "processing" | "paid" | "local_receive" | "complete") => {
    await api.post("/order", { ...order, status }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    });
    // return orderData.data;
  };

  const handleConfirmOrder = () => {
    // Todo create Pix Payment
    if (order.paymentMethod === "local") {
      try {
        const orderData = handlePostOrder("local_receive");
        console.log(orderData)
        navigation.navigate("DashboardTabs");
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Pedido concluido com sucesso",
        });
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: "Erro ao concluir pedido",
        });
      }
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
