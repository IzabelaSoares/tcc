import React from "react";
import { Circle } from "react-native-svg";

interface props {
  cx: number;
  cy: number;
  r: number;
  strokeWidth: number;
  backgroundColor: string;
}

export default function ProgressBackgroundCircle({
  cx,
  cy,
  r,
  strokeWidth,
  backgroundColor,
}: props) {
  return (
    <Circle
      stroke={backgroundColor}
      cx={cx}
      cy={cy}
      r={r}
      strokeWidth={strokeWidth}
    />
  );
}
