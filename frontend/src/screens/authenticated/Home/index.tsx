import React from "react";
import { View, Text } from "react-native";
import { LogoTitle } from "../../../components/logo";
import BottomSheet from "../../../components/ui/bottom-sheet/BottomSheet";

export default function Home() {

  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <LogoTitle textColor="text-white" />
      <Text>Home</Text>

      <BottomSheet>
        <View></View>
      </BottomSheet>
    </View>
  );
}
