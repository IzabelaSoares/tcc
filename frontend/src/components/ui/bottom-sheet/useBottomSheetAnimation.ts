import { useRef, useState } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function useBottomSheetAnimation() {
  const MIN_HEIGHT = SCREEN_HEIGHT * 0.3;
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT - MIN_HEIGHT)).current;
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    Animated.timing(translateY, {
      toValue: 0,
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
      let newTranslateY = (isExpanded ? 0 : SCREEN_HEIGHT - MIN_HEIGHT) + gestureState.dy;
      if (newTranslateY >= 0 && newTranslateY <= SCREEN_HEIGHT - MIN_HEIGHT) {
        translateY.setValue(newTranslateY);
      }
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

  return {
    translateY,
    panHandlers: panResponder.panHandlers,
    expand,
    collapse,
  };
}
