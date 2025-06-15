import React from "react";
import { View } from "react-native";

interface props {
  children: React.ReactNode;
};

export default function IconWrapper({ children }: props){
  return (
    <View className="items-center justify-center w-6 h-6">
      {children}
    </View>
  );
};

