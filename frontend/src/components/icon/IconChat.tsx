import React from "react";
import Svg, { Path } from "react-native-svg";
import IconWrapper from "./IconWrapper";
import { IconType } from "../../types/IconType";

export default function IconChat({ size = 96, color = 'white' }: IconType) {
  const scale = size / 96;
  return (
    <IconWrapper>
      <Svg
        width={96 * scale}
        height={96 * scale}
        viewBox="0 0 96 96"
        fill="none"
      >
        <Path
         d="M88 88L72 72H32C29.8 72 27.9167 71.2167 26.35 69.65C24.7833 68.0833 24 66.2 24 64V60H68C70.2 60 72.0833 59.2167 73.65 57.65C75.2167 56.0833 76 54.2 76 52V24H80C82.2 24 84.0833 24.7833 85.65 26.35C87.2167 27.9167 88 29.8 88 32V88ZM16 48.7L20.7 44H60V16H16V48.7ZM8 68V16C8 13.8 8.78333 11.9167 10.35 10.35C11.9167 8.78333 13.8 8 16 8H60C62.2 8 64.0833 8.78333 65.65 10.35C67.2167 11.9167 68 13.8 68 16V44C68 46.2 67.2167 48.0833 65.65 49.65C64.0833 51.2167 62.2 52 60 52H24L8 68Z"
         fill={color}
        />
      </Svg>
    </IconWrapper>
  );
}
