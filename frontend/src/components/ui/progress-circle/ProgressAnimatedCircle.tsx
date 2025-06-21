import React from "react";
import { Animated } from "react-native";
import { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface props {
  cx: number;
  cy: number;
  r: number;
  strokeWidth: number;
  color: string;
  circumference: number;
  strokeDashoffset: Animated.AnimatedInterpolation<string | number>;
}

export default function ProgressAnimatedCircle({
  cx,
  cy,
  r,
  strokeWidth,
  color,
  circumference,
  strokeDashoffset,
}: props) {
  return (
    <AnimatedCircle
      stroke={color}
      cx={cx}
      cy={cy}
      r={r}
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      strokeDashoffset={strokeDashoffset}
      strokeLinecap="round"
      rotation="-90"
      originX={cx}
      originY={cy}
    />
  );
}
