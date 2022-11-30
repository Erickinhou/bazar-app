import React from "react";
import { Text, View } from "react-native";
import { ProfileForm } from "../../components/ProfileForm";
import { ScreenType } from "../../navigation/types";
import { styles } from "./styles";

type Props = ScreenType<"ProfileMenu">;

export const Profile: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ProfileForm />
    </View>
  );
};
