import { FlatList, Image, View } from "react-native";
import { Typography } from "../../Typography";
import { styles } from "./styles";
import { Product } from "../../ProductSlide";
import { useEffect } from "react";
import { ProductCard } from "../../ProductSlide/ProductCard";

interface Props {
  data: Product[],
}

export const SearchProductList: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.productListContainer}>
      <Typography type="paragraph" style={styles.productFoundText}> {data.length} products found </Typography>
      <View style={styles.productListContainer} >
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ProductCard product={item} index={index} search />}
        />
      </View>
    </View>
  );
};
