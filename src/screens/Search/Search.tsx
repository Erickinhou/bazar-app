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
import { api } from "../../service";

type Props = ScreenType<"Search">;

export const Search: React.FC<Props> = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useSearch();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      const { data } = response;
      setProducts(data);
      setData(data);
    });
  }, []);

  useEffect(() => {
    const string = search.string.toLowerCase();
    if (string) {
      const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(string);
      });
      setData(filteredProducts);
    } else {
      setData(products);
    }
  }, [search]);
    

  return (
    <>
      {data.length ? (
        <View style={styles.container}>
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
