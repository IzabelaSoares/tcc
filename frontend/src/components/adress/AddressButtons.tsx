import React from "react";
import { View } from "react-native";
import { Button } from "../ui";

interface props {
  onReturn: () => void
  onCreate: () => void
}

export default function AddressButtons({ onReturn, onCreate }: props) {
  return (
    <View className="absolute bottom-0 left-0 right-0 px-4 pb-4 mb-20 ">
      <Button
        variant="primary"
        title="Incluir endereço"
        className="w-full h-[56px] mb-2"
        onPress={onCreate}
      />
      <Button variant="default" title="Voltar" className="w-full h-[56px]" onPress={onReturn} />
    </View>
  );
}
