import { FlatList, Image, View } from "react-native";
import { Typography } from "../../Typography";
import { styles } from "./styles";
import { ProductI } from "../../ProductSlide";
import { ProductCard } from "../../ProductSlide/ProductCard";

interface Props {
  products: ProductI[];
}

export const SearchProductList: React.FC<Props> = ({ products }) => {
  return (
    <View style={styles.productListContainer}>
      <Typography type="paragraph" style={styles.productFoundText}>
        {" "}
        {products.length} products found{" "}
      </Typography>
      <View style={styles.productListContainer}>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ProductCard product={item} index={index} search />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
