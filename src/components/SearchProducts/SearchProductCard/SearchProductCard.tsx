import { Image, View } from "react-native";
import { Typography } from "../../Typography";
import { styles } from "./styles";
import { Product } from "../../ProductSlide";

interface Props {
  product: Product;
}

export const SearchProductCard: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.productCardContainer} key={product.id}>
      <Image
        source={{
          uri: product.images[0],
        }}
        style={styles.thumbnail}
      />
      <Typography type="largeParagraph" style={styles.productTitle}>
        {product.title}
      </Typography>
      <Typography type="paragraph" style={styles.productDescription}>
        {product.description}
      </Typography>
      <Typography type="paragraph" style={styles.productPrice}>
        R$ {product.price}
      </Typography>
    </View>
  );
};
