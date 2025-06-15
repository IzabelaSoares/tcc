import React from "react";
import { View, Text } from "react-native";
import { Separator } from "../separator/Separator";

export default function SignUpSeparator() {
  return (
    <View className="flex-row items-center justify-center w-full px-5 mb-6">
      <Separator className="w-[140px]" />
      <Text className="px-4 font-semibold text-base text-black-100">OU</Text>
      <Separator className="w-[140px]" />
    </View>
  );
}
