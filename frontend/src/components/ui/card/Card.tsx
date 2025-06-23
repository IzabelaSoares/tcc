import React, { ReactNode } from "react";
import { View } from "react-native";

interface props {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
}

export default function Card({ children, className, shadow }: props) {
  let style = shadow
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
      }
    : undefined;
  return (
    <View className={className} style={style}>
      {children}
    </View>
  );
}
