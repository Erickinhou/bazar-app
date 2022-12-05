import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
  ViewToken,
} from "react-native";
import { CARD_LENGTH, SPACING } from "./constants";
import { ImageItem } from "./ImageItem";
import { Indicator } from "./Indicator";
import { styles } from "./styles";

interface Props {
  images: string[];
}

interface OnViewableItemsChangedEvent {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider: React.FC<Props> = ({ images }) => {
  const [visibleItemIndex, setVisibleItemIndex] = useState<number>(0);
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const flatListRef = useRef();

  const _onViewableItemsChanged = useCallback(
    ({ viewableItems }: OnViewableItemsChangedEvent) => {
      if (viewableItems.length) {
        setVisibleItemIndex(viewableItems.pop().index);
      }
    },
    []
  );

  return (
    <View>
      <FlatList
        scrollEventThrottle={16}
        decelerationRate={0.8}
        ref={flatListRef}
        snapToInterval={CARD_LENGTH + SPACING * 4}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={images}
        horizontal={true}
        renderItem={ImageItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={_onViewableItemsChanged}
        pagingEnabled={true}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.indicatorContainer}>
        {images?.map((_, index) => (
          <Indicator key={index.toString()} isActive={index === visibleItemIndex} />
        ))}
      </View>
    </View>
  );
};
