import React from "react";
import Animated from "react-native-reanimated";
import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";

import { colorPalette } from "../../theme/colors";

export const AnimatedDrawerView = ({children, ...props}: any) => {

  const isDrawer = useDrawerStatus() === "open";
  const progress: any = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 40],
  });
  const animatedStyles = { borderRadius, transform: [{ scale }] };

  return (
    <Animated.View
      style={[
        { flex: 1 },
        isDrawer ? { borderWidth: 15, borderColor: colorPalette.backgroundWhite } : null,
        animatedStyles
      ]}
    >
      {children}
    </Animated.View>
  );
};