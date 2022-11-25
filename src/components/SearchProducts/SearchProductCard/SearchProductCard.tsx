import { Image, View } from "react-native";
import { Typography } from "../../Typography";
import { styles } from "./styles";
import { Product } from "../../ProductSlide";

interface Props {
  product: Product,
  position: number
}

export const SearchProductCard: React.FC<Props> = ({ product , position}) => {
  return (
    <View style={[styles.productCardContainer,
      position % 2 === 0 ? {marginTop: 0} : {marginTop: 40}
    ]} key={product.id}>
      <Image
        source={{
          uri: product.images[0],
        }}
        style={styles.thumbnail}
      />
      <Typography type="paragraph" style={styles.productTitle}>
        {product.title}
      </Typography>
      <Typography type="paragraph" style={styles.productPrice}>
        R$ {product.price}
      </Typography>
    </View>
  );
};
