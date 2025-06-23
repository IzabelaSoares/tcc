import React from "react";
import { View } from "react-native";

interface props {
  Icon: React.JSX.Element;
  color: string;
}

export default function ProfileRewardCard({ Icon, color }: props) {
  return (
    <View
      className={`w-[73px] h-[73px] rounded-2xl ml-4 items-center justify-center ${color}`}
    >
      {Icon}
    </View>
  );
}
