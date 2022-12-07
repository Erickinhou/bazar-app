import React, { useState } from "react";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { api } from "../../service";
import { NavigationProps, ScreenType } from "../../navigation/types";
import { CartProductI } from "../../components/Cart/CartProductList";

import { AddressCard } from "../../components/AddressCard";
import { Button } from "../../components/Button";
import { PaymentMethod } from "../../components/PaymentMethod";
import { User, useUser } from "../../context/user";

export interface OrderI {
  userId: string;
  paymentMethod: "pix" | "local";
  status: "processing" | "paid" | "local_receive" | "complete";
  address: {
    id: string;
  };
}

interface OrderResponse extends Omit<OrderI, "userId"> {
  createdDate: string;
  updatedDate: string;
  id: string;
  user: User;
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
    paymentMethod: "pix",
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

  const cleanCart = () => {
    AsyncStorage.clear();
  };

  const createOrder = async (
    status: "processing" | "paid" | "local_receive" | "complete"
  ) => {
    const { data: orderData } = await api.post<OrderResponse>("/order", {
      ...order,
      status: status,
    });
    return orderData;
  };

  const createOrderProduct = async (orderData: OrderResponse) => {
    const cart = await getItem();
    const cartParsed: CartProductI[] = cart ? JSON.parse(cart) : [];
    const orderProductData: OrderProductI[] = cartParsed.map(
      (cardProduct: CartProductI) => {
        return {
          product: { id: cardProduct.product.id },
          order: { id: orderData.id },
          amount: cardProduct.amount,
        };
      }
    );
    await api.post("/orderProducts", orderProductData);
  };

  const handleConfirmOrder = async () => {
    try {
      if (order.paymentMethod === "local") {
        const orderData = await createOrder("local_receive");
        await createOrderProduct(orderData);
        navigation.navigate("DashboardTabs", { screen: "Dashboard" });
      }
      if (order.paymentMethod === "pix") {
        const orderData = await createOrder("processing");
        await createOrderProduct(orderData);
        navigation.navigate("Pix");
      }
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Pedido concluido com sucesso",
      });
      cleanCart();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Erro ao concluir pedido",
      });
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
