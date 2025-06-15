import React from "react";
import Svg, { Path } from "react-native-svg";
import IconWrapper from "./IconWrapper";
import { IconType } from "../../types/IconType";

export default function IconPeople({ size = 24, color }: IconType) {
  const scale = size / 48;
  return (
    <IconWrapper>
      <Svg
        width={48 * scale}
        height={48 * scale}
        viewBox="0 0 48 48"
        fill="none"
      >
        <Path
          d="M11 39H18.5V26.5H29.5V39H37V19.5L24 9.75L11 19.5V39ZM8 42V18L24 6L40 18V42H26.5V29.5H21.5V42H8Z"
          fill={color || "#606060"}
        />
      </Svg>
    </IconWrapper>
  );
}
