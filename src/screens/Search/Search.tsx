import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Typography } from "../../components/Typography";
import { useSearch } from "../../context/search";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";
import interrogrationMark from "../../../assets/images/interrogationMark.png";
import data from "./data.json";

export interface Category {
  id: string;
  title: string;
  describe: string;
  updatedDate: string;
  createdDate: string;
}
export interface Product {
  id: string;
  title: string;
  description: string;
  color: string | null;
  images: string[];
  price: string;
  size: string[] | null;
  category: Category[];
  updatedDate: string;
  createdDate: string;
}

type Props = ScreenType<"Search">;

export const Search: React.FC<Props> = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useSearch();

  useEffect(() => {
    handleSearch();
  }, [search]);
  
  const handleSearch = () => {
    console.log(search);
  };

  return (
    <>
        {products.length ? (
          <View style={styles.container}>
              <Typography type="paragraph"> Products found </Typography>
          </View>
        ) : (
          <View style={styles.container}>
            <View>
              <Image source={interrogrationMark} style={styles.interrogationMark} />
              <Typography type="paragraph" style={styles.noProductFoundText}> Item não encontrado </Typography>
              <Typography type="paragraph" style={styles.noProductText}> Tente procurar por um termo mais genério ou olhe outros produtos </Typography>
            </View>
          </View>
        )}
    </>
  );
};
