import { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import { Typography } from "../../components/Typography";
import { useSearch } from "../../context/search";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";
import { Product } from "../../components/ProductSlide";
import SearchProducts from "../../components/SearchProducts/SearchProducts";
import { api } from "../../service";
import { NoProductFound } from "../../components/SearchProducts/NoProductFound";
import { SearchProductList } from "../../components/SearchProducts/SearchProductList";

type Props = ScreenType<"Search">;

export const Search: React.FC<Props> = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useSearch('');
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      await api.get("/products", {
        params: {
          filter: {
            search,
          },
        },
      }).then((response) => {
        const { data } = response;
        setProducts(data);
        setData(data);
      });
    }
    getProducts();
  }, []);

  useEffect(() => {
    const string = search.string?.toLowerCase();
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
          <SearchProductList data={data} />
        </View>
      ) : (
        <View style={styles.containerNoProduct}>
          <NoProductFound />
        </View>
      )
      }
    </>
  );
};
