import { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import { Typography } from "../../components/Typography";
import { useSearch } from "../../context/search";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";
import { Product } from "../../components/ProductSlide";
import interrogrationMark from "../../../assets/images/interrogationMark.png";
import data from "./data.json";
import SearchProducts from "../../components/SearchProducts/SearchProducts";

type Props = ScreenType<"Search">;

export const Search: React.FC<Props> = () => {

  const [products, setProducts] = useState<Product[]>(data);
  const [search, setSearch] = useSearch();

  return (
    <>
      {products.length ? (
        <View style={styles.container}>
          <Typography type="paragraph" style={styles.productFoundText}> {products.length} products found </Typography>
          <View style={styles.productListContainer} >
            <FlatList
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => <SearchProducts product={item} position={index} />}
            />
          </View>
        </View>
      ) : (
        <View style={styles.containerNoProduct}>
          <View>
            <Image source={interrogrationMark} style={styles.interrogationMark} />
            <Typography type="paragraph" style={styles.noProductFoundText}> Item não encontrado </Typography>
            <Typography type="paragraph" style={styles.noProductText}> Tente procurar por um termo mais genério ou olhe outros produtos </Typography>
          </View>
        </View>
      )
      }
    </>
  );
};
