import React, { useEffect } from "react";
import { Animated, Dimensions, StyleProp, ViewStyle } from "react-native";
import useBottomSheetAnimation from "./useBottomSheetAnimation";
import BottomSheetHandle from "./BottomSheetHandle";

interface props {
  children: React.ReactNode;
  minHeight?: number
  minTranslateY?: number
}

export default function BottomSheet({ children, minHeight = 0.4, minTranslateY = 150 }: props) {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const { translateY, panHandlers, collapse } = useBottomSheetAnimation({ minHeight, minTranslateY });
  const animatedViewStyle: StyleProp<ViewStyle> = [
    {
      height: SCREEN_HEIGHT,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    { transform: [{ translateY }] },
  ];

  useEffect(() => {
    collapse();
  }, []);

  return (
    <Animated.View
      style={animatedViewStyle}
      className="bg-background rounded-t-[50px] px-4 pt-2 pb-4"
      {...panHandlers}
    >
      <BottomSheetHandle />
      {children}
    </Animated.View>
  );
}
