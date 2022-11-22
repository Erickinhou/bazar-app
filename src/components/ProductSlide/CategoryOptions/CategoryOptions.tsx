import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { api } from "../../../service";
import { Category } from "../ProductSlide";
import { styles } from "./styles";

interface Props {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  selectedCategoryId: string;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryOptions: React.FC<Props> = ({
  categories,
  setCategories,
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
  const getCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setSelectedCategoryId(data[0]?.id);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Falha ao acessar Dashboard",
        text2:
          err?.response.data.message ??
          "Reinicie o app ou contacte os responsáveis",
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {categories.map((category) => (
          <View key={category.id}>
            <Pressable onPress={() => setSelectedCategoryId(category.id)}>
              <Text
                style={
                  selectedCategoryId === category.id
                    ? styles.selectedText
                    : styles.text
                }
              >
                {category.title}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};