import { useRef, useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";

interface props {
  minHeight: number
  minTranslateY: number
}

export default function useBottomSheetAnimation({
  minHeight,
  minTranslateY,
}: props) {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const MIN_HEIGHT = SCREEN_HEIGHT * minHeight;
  const MIN_TRANSLATE_Y = minTranslateY; 

  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT - MIN_HEIGHT)).current;
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    Animated.timing(translateY, {
      toValue: MIN_TRANSLATE_Y,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsExpanded(true));
  };

  const collapse = () => {
    Animated.timing(translateY, {
      toValue: SCREEN_HEIGHT - MIN_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsExpanded(false));
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newTranslateY = (isExpanded ? MIN_TRANSLATE_Y : SCREEN_HEIGHT - MIN_HEIGHT) + gestureState.dy;

      if (newTranslateY < MIN_TRANSLATE_Y) newTranslateY = MIN_TRANSLATE_Y;
      if (newTranslateY > SCREEN_HEIGHT - MIN_HEIGHT) newTranslateY = SCREEN_HEIGHT - MIN_HEIGHT;

      translateY.setValue(newTranslateY);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy < -50) {
        expand();
      } else if (gestureState.dy > 50) {
        collapse();
      } else {
        isExpanded ? expand() : collapse();
      }
    },
  });

  return { translateY, panHandlers: panResponder.panHandlers, expand, collapse };
}
