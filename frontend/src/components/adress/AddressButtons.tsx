import React from "react";
import { View } from "react-native";
import { Button } from "../ui";

export default function AddressButtons() {
  return (
    <View className="absolute bottom-0 left-0 right-0 px-4 pb-4 mb-20 ">
      <Button
        variant="primary"
        title="Incluir endereço"
        className="w-full h-[56px] mb-2"
      />
      <Button variant="default" title="Voltar" className="w-full h-[56px]" />
    </View>
  );
}
