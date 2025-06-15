import React from "react";
import { View, Text } from "react-native";
import { LogoTitle } from "../../../components/logo";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6" >
      <LogoTitle textColor="text-white" />
    </View>
  );
}
