import React from "react";
import { View } from "react-native";
import { AddressContentCard, AddressTitle } from "../../../components/adress";

export default function Address() {
  return (
    <View className="flex-1 bg-primary pt-24 ">
      <AddressTitle />
      <AddressContentCard />
    </View>
  );
}
