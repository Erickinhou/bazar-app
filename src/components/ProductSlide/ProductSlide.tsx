import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { api } from "../../service";
import { colorPalette } from "../../theme/colors";
import { TextLink } from "../TextLink";
import { CategoryOptions } from "./CategoryOptions";
import { ProductCard } from "./ProductCard";
import arrowRightPurpleIcon from "../../../assets/images/arrowRightPurpleIcon.png";
import { styles } from "./styles";

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

export const ProductSlide = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();

  const updateProductById = async () => {
    try {
      const { data: updateProducts }: AxiosResponse<Product[]> = await api.get(
        "/products",
        {
          params: {
            filter: {
              categoryId: selectedCategoryId,
            },
          },
        }
      );
      setProducts(updateProducts);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2:
          err?.response.data.message ?? "Não foi possivel conectar ao servidor",
      });
    }
  };

  useEffect(() => {
    updateProductById();
  }, [selectedCategoryId]);

  return (
    <>
      <CategoryOptions
        categories={categories}
        setCategories={setCategories}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <View style={styles.productSlideContainer}>
        <ScrollView horizontal={true}>
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </ScrollView>
      </View>
      <TextLink theme="primary" textAlign="right">
        Ver mais <Image source={arrowRightPurpleIcon} />
      </TextLink>
    </>
  );
};
