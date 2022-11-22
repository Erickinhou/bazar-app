import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { api } from "../../service";
import { CategoryOptions } from "./CategoryOptions";
import { ProductCard } from "./ProductCard";
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
    const { data: updateProducts }: AxiosResponse<Product[]> = await api.get(
      "/products",
      {
        params: { filterByCategoryId: selectedCategoryId },
      }
    );
    setProducts(updateProducts);
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
    </>
  );
};
