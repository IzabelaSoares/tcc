import IconWrapper from "./IconWrapper";
import Svg, { Path } from "react-native-svg";
import { IconType } from "../../types/IconType";

export default function IconMenuHamburger({
  size = 48,
  color = "white",
}: IconType) {
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
          d="M6 36V33H42V36H6ZM6 25.5V22.5H42V25.5H6ZM6 15V12H42V15H6Z"
          fill={color}
        />
      </Svg>
    </IconWrapper>
  );
}
