import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSearch } from "../../context/search";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";
import { Product } from "../../components/ProductSlide";
import { api } from "../../service";
import { NoProductFound } from "../../components/NoProductFound";
import { SearchProductList } from "../../components/Search/SearchProductList";

type Props = ScreenType<"Search">;

export const Search: React.FC<Props> = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useSearch('');
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts(filterName: string) {
      await api.get("/products", {
        params: {
          filter: {
            search: filterName,
          },
        },
      }).then((response) => {
        const { data } = response;
        setProducts(data);
        setData(data);
      });
    }
    const string = search.string?.toLowerCase();
    getProducts(string);
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
      )}
    </>
  );
};
