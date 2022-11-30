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
  const [search] = useSearch();

  useEffect(() => {
    async function getProducts(filterName: string) {
      const { data } = await api.get("/products", {
        params: {
          filter: {
            search: filterName,
          },
        },
      });

      setProducts(data);
    }
    const searchLowerCase = search.toLowerCase();
    getProducts(searchLowerCase);
  }, [search]);

  return (
    <>
      {products.length ? (
        <View style={styles.container}>
          <SearchProductList products={products} />
        </View>
      ) : (
        <View style={styles.containerNoProduct}>
          <NoProductFound />
        </View>
      )}
    </>
  );
};
