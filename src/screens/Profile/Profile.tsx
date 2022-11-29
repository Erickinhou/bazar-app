import React from "react";
import { Text, View } from "react-native";
import { ScreenType } from "../../navigation/types";

type Props = ScreenType<"ProfileMenu">;

export const Profile: React.FC<Props> = () => {
  return (
    <View>
      <Text>Profile page</Text>
    </View>
  );
};
