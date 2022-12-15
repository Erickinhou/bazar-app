import { Image, TouchableOpacity, View } from "react-native";
import { Typography } from "../../Typography";
import { ProductI } from "../ProductSlide";
import { ProductCardHOC } from "../../../hoc/ProductsCardStyle";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../navigation/types";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  product: ProductI;
  style?: {
    productCardContainer: object;
    thumbnail: object;
    productTitle: object;
    productDescription: object;
    productPrice: object;
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
        <Typography type="largeParagraph" style={style.productTitle}>
          {product.title}
        </Typography>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View onStartShouldSetResponder={() => true}>
            <Typography type="paragraph" style={style.productDescription}>
              {product.description}
            </Typography>
          </View>
        </ScrollView>
        <Typography type="paragraph" style={style.productPrice}>
          R$ {product.price}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export const ProductCard = ProductCardHOC(ProductCardComponent);
