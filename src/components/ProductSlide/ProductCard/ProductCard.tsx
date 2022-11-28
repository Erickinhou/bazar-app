import { Image, View } from "react-native";
import { Typography } from "../../Typography";
import { Product } from "../ProductSlide";
import { ProductCardHOC } from "../../../hoc/ProductsCardStyle";

interface Props {
  product: Product,
  style?: any
}

const ProductCard: React.FC<Props> = ({ product, style }) => {
  return (
    <View style={[style.productCardContainer, style]} key={product.id}>
      <Image
        source={{
          uri: product.images[0],
        }}
        style={style.thumbnail}
      />
      <Typography type="largeParagraph" style={style.productTitle}>
        {product.title}
      </Typography>
      <Typography type="paragraph" style={style.productDescription}>
        {product.description}
      </Typography>
      <Typography type="paragraph" style={style.productPrice}>
        R$ {product.price}
      </Typography>
    </View>
  );
};

export const ProductCardTest = ProductCardHOC(ProductCard);

