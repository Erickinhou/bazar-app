import React, { useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { api } from "../../service";
import { NavigationProps, ScreenType } from "../../navigation/types";
import { CartProductI } from "../../components/Cart/CartProductList";

import { AddressCard } from "../../components/AddressCard";
import { Button } from "../../components/Button";
import { PaymentMethod } from "../../components/PaymentMethod";
import { useUser } from "../../context/user";

export interface OrderI {
  userId: string;
  paymentMethod: "pix" | "local";
  status: "processing" | "paid" | "local_receive" | "complete";
  address: {
    id: string;
  };
}

export interface OrderProductI {
  product: {
    id: string;
  };
  order: {
    id: string;
  };
  amount: number;
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

  const createOrder = async (status: "processing" | "paid" | "local_receive" | "complete") => {
    try {
      const { data: orderData } = await api.post("/order", { ...order, status: status });
      return orderData
    } catch (error) {
      console.log(error.response.data)
    }
  };

  const createOrderProduct = async (orderData: any) => {
    try {
      const cart = await getItem();
      const cartParsed = cart ? JSON.parse(cart) : [];
      let obejct: OrderProductI[] = [];
      cartParsed.forEach(async (product: CartProductI) => {
        obejct.push({
          product: { id: product.product.id },
          order: { id: orderData.id },
          amount: product.amount,
        });
      });
      await api.post("/orderProducts", obejct);
    } catch (error) {
      console.log(error.response.data)
    }
  };

  const handleConfirmOrder = async () => {
    // Todo create Pix Payment
    if (order.paymentMethod === "local") {
      try {
        const orderData = await createOrder("local_receive");
        createOrderProduct(orderData);
        navigation.navigate("DashboardTabs", { screen: "Dashboard" });
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Pedido concluido com sucesso",
        });
        AsyncStorage.clear();
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
