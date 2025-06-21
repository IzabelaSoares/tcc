import React from 'react';
import { Circle } from 'react-native-svg';

interface props {
  cx: number;
  cy: number;
  r: number;
  fillColor: string;
}

export default function ProgressInnerFill({ cx, cy, r, fillColor }: props) {
  return <Circle fill={fillColor} cx={cx} cy={cy} r={r} />;
}
