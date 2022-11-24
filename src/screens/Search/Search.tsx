import { useState } from "react";
import { View, Image } from "react-native";
import { Typography } from "../../components/Typography";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";


type Props = ScreenType<"Search">;

export const Search: React.FC<Props> = () => {

  const [products, setProducts] = useState<[]>([]);

  return (
    <>
      <View style={styles.container}>
        {products.length ? (
          <Typography type="paragraph"> Products found </Typography>
        ) : (
          <View style={styles.noProductContainer}>
            <View style={styles.noProductHeaderTextContainer}>
              <Typography type="paragraph" style={styles.interrogationMark}> ? </Typography>
              <Typography type="paragraph" style={styles.noProductFoundText}> Item não encontrado </Typography>
            </View>
            <Typography type="paragraph" style={styles.noProductText}> Tente procurar por um termo mais genério ou olhe outros produtos </Typography>
          </View>
        )}
      </View>
    </>
  );
};
