import { ReactNode } from "react";
import { Dimensions, View } from "react-native";

interface props {
  children: ReactNode;
  className?: string;
  top?: number;
}

export default function ContentCard({
  children,
  className = "bg-white",
  top = 0.2,
}: props) {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  return (
    <View
      className={`justify-start rounded-t-[50px] px-4 pt-4 absolute left-0 right-0 bottom-0 ${className} `}
      style={{
        top: SCREEN_HEIGHT * top,
      }}
    >
      {children}
    </View>
  );
}
