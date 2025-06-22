import React from "react";
import { View } from "react-native";
import { LogoTitle } from "../../../components/logo";
import { HomeBottomSheet, HomeComunication } from "../../../components/home";

export default function Home() {
  return (
    <View className="flex-1 bg-primary pt-20">
      <LogoTitle textColor="text-white" />
      <HomeComunication />
      <HomeBottomSheet />
    </View>
  );
}
