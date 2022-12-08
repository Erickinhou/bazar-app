import { Image, TouchableOpacity, View } from "react-native";
import { Typography } from "../../Typography";
import { ProductI } from "../ProductSlide";
import { ProductCardHOC } from "../../../hoc/ProductsCardStyle";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../navigation/types";

interface Props {
  product: ProductI;
  style?: {
    productCardContainer: object;
    thumbnail: object;
    productTitle: object;
    productDescription: object;
    productPrice: object;
    typeTitle: "title" | "paragraph" | "subtitle" | "largeParagraph";
    typeDescription: "title" | "paragraph" | "subtitle" | "largeParagraph";
    typePrice: "title" | "paragraph" | "subtitle" | "largeParagraph";
  };
}

const ProductCardComponent: React.FC<Props> = ({ product, style }) => {
  const navigation = useNavigation<NavigationProps>();

  const handleButtonClick = () => {
    navigation.navigate("Product", { product });
  };

  return (
    <TouchableOpacity onPress={() => handleButtonClick()}>
      <View style={style.productCardContainer} key={product.id}>
        <Image
          source={{
            uri: product.images[0],
          }}
          style={style.thumbnail}
        />
        <Typography type={style.typeTitle} style={style.productTitle}>
          {product.title}
        </Typography>
        <Typography type={style.typeDescription} style={style.productDescription}>
          {product.description}
        </Typography>
        <Typography type={style.typePrice} style={style.productPrice}>
          R$ {product.price}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export const ProductCard = ProductCardHOC(ProductCardComponent);
