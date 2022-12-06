import React from "react";
import { View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { ScreenType } from "../../navigation/types";
import { ProductI } from "../../components/ProductSlide";
import { ImageSlider } from "../../components/ImageSlider";
import { styles } from "./styles";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/Button";

type Props = ScreenType<"Product">;
type Routes = {
  product: ProductI;
};

export const Product: React.FC<Props> = ({ route, navigation }) => {
  const { product }: Routes = route.params;
  const { getItem, setItem } = useAsyncStorage('@cart');

  if (!product) {
    navigation.navigate("Login");
  }

  const handleAddToCart = async () => {
    const cart = await getItem();
    const cartParsed = cart ? JSON.parse(cart) : [];
    const productExists = cartParsed.find((item: any) => item.product.id === product.id);
    if (productExists) {
      cartParsed.find((item: any) => item.product.id === product.id).amount += 1;
    } else {
      cartParsed.push({ product: product, amount: 1 });
    }
    await setItem(JSON.stringify(cartParsed));
  };

  return (
    <View style={styles.container}>
      <ImageSlider images={product.images} />
      <View style={styles.productDetailsContainer}>
        <Typography type="title" style={styles.title}>
          {product.title}
        </Typography>
        <Typography type="largeParagraph">Descrição</Typography>
        <Typography style={styles.description} type="paragraph">
          {product.description}
        </Typography>
        <View style={styles.priceContainer}>
          <Typography type="largeParagraph">Total:</Typography>
          <Typography type="largeParagraph" style={styles.priceText}>
            R$ {product.price}
          </Typography>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            handleAddToCart();
          }}
          text="Adicionar o carrinho"
        />
      </View>
    </View>
  );
};
