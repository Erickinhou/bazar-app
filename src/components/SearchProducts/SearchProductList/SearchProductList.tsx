import { FlatList, Image, View } from "react-native";
import { Typography } from "../../Typography";
import { styles } from "./styles";
import { Product } from "../../ProductSlide";
import SearchProducts from "../SearchProducts";
import { useEffect } from "react";

interface Props {
  data: Product[],
}

export const SearchProductList: React.FC<Props> = ({data}) => {
  return (
    <View style={{flex: 1}}>
      <Typography type="paragraph" style={styles.productFoundText}> {data.length} products found </Typography>
      <View style={styles.productListContainer} >
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <SearchProducts product={item} position={index} />}
        />
      </View>
    </View>
  );
};
